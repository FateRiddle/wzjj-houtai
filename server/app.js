// server/app.js
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
// const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

const sql = require('mssql');
const db = sql.connect("mssql://youcb:DJit9379@youcaibao.sqlserver.rds.aliyuncs.com:3433/youcb_dev")

// Setup logger
// app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/user', (req, res) => {
  db.then(() => {
    return sql.query`select * from tb_huodong order by createdAt desc`
  })
    .then(result => {
      res.send(result)
    })
    .catch(err => {console.error('sql error:',err)})
})

app.post('/user/completed', (req, res) => {
  const { id } = req.body
  db.then(() => {
    const request = new sql.Request()
    return request
    .query(`
        declare @c bit
        select @c=completed from tb_huodong where id=${id}
        if(@c is null or @c=0)
        update tb_huodong set completed = 1 where id=${id}
        if(@c=1)
        update tb_huodong set completed = 0 where id=${id}
      `)
  })
  .then( result => {
    res.json(result)
  })
})

app.post('/appointment/completed', (req, res) => {
  const { id } = req.body
  db.then(() => {
    const request = new sql.Request()
    return request
    .query(`
        declare @c bit
        select @c=completed from tb_ej_yuy where id=${id}
        if(@c is null or @c=0)
        update tb_ej_yuy set completed = 1 where id=${id}
        if(@c=1)
        update tb_ej_yuy set completed = 0 where id=${id}
      `)
  })
  .then( result => {
    res.json(result)
  })
})

app.post('/user/memo', (req, res) => {
  const { id,memo } = req.body
  db.then(() => {
    const request = new sql.Request()
    return request
    .query(`
        update tb_huodong set memo = '${memo}' where id=${id}
      `)
  })
  .then( result => {
    res.json(result)
  })
})

app.post('/appointment/memo', (req, res) => {
  const { id,memo } = req.body
  db.then(() => {
    const request = new sql.Request()
    return request
    .query(`
        update tb_ej_yuy set memo = '${memo}' where id=${id}
      `)
  })
  .then( result => {
    res.json(result)
  })
})

app.get('/appointment', (req,res) => {
  db.then(() => {
    return sql.query`select *
      from tb_ej_yuy
      order by createdAt desc
    `
  })
    .then(result => {
      res.send(result)
    })
    .catch(err => {console.error('sql error:',err)})
})

app.post('/appointment', (req,res) => {
  // if(req.bdoy){
    const { name,phone,bao,kuan,price } = req.body
    db.then(() => {
      const request = new sql.Request()
      return request
      .output('msg',sql.VarChar(100))
      .query(`
          set @msg = '预约成功。'
          if exists (select 1 from tb_ej_yuy where name = '${name}' and phone = '${phone}')
          begin
            set @msg = '请勿重复预约。'
            return
          end
          insert into tb_ej_yuy
          (name,phone,bao,kuan,price,createdAt)
          values('${name}','${phone}','${bao}','${kuan}','${price}',getdate())
        `)
    })
    .then( result => {
      res.json(result)
    })
  // }
})

app.post('/liangfang', (req,res) => {
  // if(req.bdoy){
    const { name,phone,area } = req.body
    db.then(() => {
      const request = new sql.Request()
      return request
      .output('msg',sql.VarChar(100))
      .query(`
          set @msg = '预约成功。'
          if exists (select 1 from tb_huodong where name = '${name}' and phone = '${phone}')
          begin
            set @msg = '请勿重复预约。'
            return
          end
          insert into tb_huodong
          (name,phone,address,huodong,createdAt)
          values('${name}','${phone}','${area}','量房',getdate())
        `)
    })
    .then( result => {
      res.json(result)
    })
  // }
})

// app.post('/appointment', (req,res) => {
//   console.log(req.body)
//   // if(req.body){
//   const { name,phone,bao,kuan } = req.body
//   db.then(() => {
//     new sql.Request().query(`
//       insert into tb_ej_yuy (name,phone,bao,kuan,createdAt) values('${name}','${phone}','${bao}','${kuan}',getdate())
//     `)
//     .then(data => res.send('预约成功。'))
//     .catch(err => res.send(err))
//   }).catch(err => res.send(err))
// })


// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {

  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
