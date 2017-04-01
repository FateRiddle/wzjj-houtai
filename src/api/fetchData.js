import axios from 'axios'

const fakedb = {
  // users:[
  //   {"id":4,"name":"dad","phone":"15205819127","address":"123","huodong":"活动","createdAt":"2017-02-28T23:16:57.333Z",complete:true, "memo":""},
  //   {"id":5,"name":"mum","phone":"13456854683","address":"234","huodong":"活动","createdAt":"2017-03-01T12:29:05.966Z",complete:false, "memo":"d"},
  //   {"id":6,"name":"yangdi","phone":"18684718378","address":"34","huodong":"量房","createdAt":"2017-03-01T13:30:15.770Z",complete:false, "memo":""},
  //   {"id":7,"name":"阳迪","phone":"15205812583","address":"56","huodong":"量房","createdAt":"2017-03-01T13:33:06.120Z",complete:true, "memo":"a"},
  //   {"id":8,"name":"苏黎","phone":"18727213536","address":"678","huodong":"量房","createdAt":"2017-03-01T13:46:14.546Z",complete:false, "memo":""}
  // ],
  // appointments: [
  //   {"id":1,"name":"洛桑","phone":"15205819127","bao":"菜包","kuan":"爆款","price":399,"createdAt":"2017-02-28T23:16:57.333Z",complete:false, "memo":""},
  //   {"id":2,"name":"白羊","phone":"15205823127","bao":"肉包","kuan":"大款","price":999,"createdAt":"2017-03-01T13:46:14.546Z",complete:true, "memo":"撒地方"},
  // ],
  auth:{name:'youcb',password:'1234'}
}

const url = ''

const delay = ms =>
  new Promise(resolve => setTimeout(resolve,ms))

// export const fetchData = () => delay(600).then(() => fakedb.users)

export const fetchUser = () => {
  return axios.get(`${url}/user`).then(res => res.data)
}

export const fetchAppointment = () => {
  return axios.get(`${url}/appointment`).then(res => res.data)
}

export const toggleUser = (id) => {
  return axios.post(`${url}/user/completed`,{id})
}

export const toggleApp = (id) => {
  return axios.post(`${url}/appointment/completed`,{id})
}

export const editUserMemo = (id,memo) => {
  return axios.post(`${url}/user/memo`,{id,memo})
}

export const editAppMemo = (id,memo) => {
  return axios.post(`${url}/appointment/memo`,{id,memo})
}

export const auth = (name,password) => delay(600).then(() => {
  return fakedb.auth.name === name && fakedb.auth.password === password
})
