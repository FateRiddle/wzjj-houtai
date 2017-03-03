import axios from 'axios'

const fakedb = {
  users:[
    {"id":4,"name":"dad","phone":"15205819127","address":"retro","huodong":"e键美家","createdAt":"2017-02-28T23:16:57.333Z"},
    {"id":5,"name":"mum","phone":"13456854683","address":"阿道夫","huodong":"e键美家","createdAt":"2017-03-01T12:29:05.966Z"},
    {"id":6,"name":"yangdi","phone":"18684718378","address":"xiao","huodong":"e键美家","createdAt":"2017-03-01T13:30:15.770Z"},
    {"id":7,"name":"阳迪","phone":"15205812583","address":"东健","huodong":"e键美家","createdAt":"2017-03-01T13:33:06.120Z"},
    {"id":8,"name":"苏黎","phone":"18727213536","address":"123456","huodong":"e键美家","createdAt":"2017-03-01T13:46:14.546Z"}
  ],
  auth:{name:'youcb',password:'1234'}
}

const delay = ms =>
  new Promise(resolve => setTimeout(resolve,ms))

// export const fetchData = () => delay(600).then(() => fakedb.users)

export const fetchData = () => {
  return axios.get('/user').then(res => res.data)
}


export const auth = (name,password) => delay(600).then(() => {
  return fakedb.auth.name === name && fakedb.auth.password === password
})
