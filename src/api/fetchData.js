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
  return axios.delete(`${url}/api/news/${id}`,).then(res => {
    console.log(res);
    return res
  })
}

export const fetchMembers = (members) => {
  return axios.get(`${url}/api/members`).then(res => res.data)
}

export const toggleMember = (id) => {
  if(id){
    return axios.post(`${url}/api/members/${id}?completed=toggle`).then(res => res)
  }
  return Promise.resolve()
}

export const saveMemo = (id,memo) => {
  return axios.post(`${url}/api/members/${id}?memo=${memo}`).then(res => {
    return res
  })
}

export const auth = (name,password) => delay(600).then(() => {
  return fakedb.auth.name === name && fakedb.auth.password === password
})
