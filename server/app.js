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
// Setup logger
// app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

const database = require('./db')
const { db,sql } = database

// Serve static assets
// app.use(
//   express.static(path.resolve(__dirname, '..', 'build'))
// )
//
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
// })

app.get('/api/news', (req, res) => {
  db.then(() => {
    return sql.query`select top 23 * from tb_wzjj_news order by createdAt`
  })
  .then(result => {
    res.json(result)
  })
  .catch(err => {console.error('sql error:',err)})
})



app.post('/api/news', (req, res) => {
  const { id,date,title,url,content } = req.body

  db.then(() => {
    const request = new sql.Request()
    return request
    .query(`
        if exists(select 1 from tb_wzjj_news where id='${id}')
        begin
          update tb_wzjj_news set
          date = '${date}',
          title = '${title}',
          url = '${url}',
          content = '${content}',
          modifiedAt = getdate()
          where id = '${id}'
        end
        else
        begin
          insert into tb_wzjj_news (id,date,title,url,content,createdAt)
          values ('${id}','${date}','${title}','${url}','${content}',getdate())
        end
      `)
  })
  .then( result => {
    res.json(result)
  })
  .catch(err => {console.error('sql error:',err)})
})

app.delete('/api/news/:id',(req,res) => {
  const { id } = req.params
  db.then(() => {
    const request = new sql.Request()
    return request
    .query(`
      delete from tb_wzjj_news where id='${id}'
    `)

  })
  .then( result => {
    res.json(result)
  })
  .catch(err => {console.error('sql error:',err)})
})

module.exports = app;
