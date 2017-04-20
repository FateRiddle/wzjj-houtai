import axios from 'axios'

const fakedb = {
  auth:{name:'wzjj',password:'1234'}
}

const url = ''

const delay = ms =>
  new Promise(resolve => setTimeout(resolve,ms))

// export const fetchData = () => delay(600).then(() => fakedb.users)

export const fetchNews = () => {
  return axios.get(`${url}/api/news`).then(res => res.data)
}

// news:{id,title,url,date,content}

export const saveNews = (news) => {
  return axios.post(`${url}/api/news`,news).then(res => {
    return res
  })
}

export const deleteNews = (id) => {
  return axios.put(`${url}/api/news/${id}`,).then(res => {
    console.log(res);
    return res
  })
}

export const auth = (name,password) => delay(600).then(() => {
  return fakedb.auth.name === name && fakedb.auth.password === password
})
