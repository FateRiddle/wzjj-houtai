import * as api from '../../api/fetchData'
import { getIsFetchingNews,getIsSavingNews } from '../reducers'
import { v4 } from 'uuid'

export const updateNews = () => (dispatch, getState) => {
  //如果已经在fetch，不再fetch第二次
  if(getIsFetchingNews(getState())){
    return Promise.resolve()
  }

  dispatch({
    type:'UPDATE_NEWS_REQUEST',
  })

  return api.fetchNews().then(
    response => {
      console.log(response)
      dispatch({
        type: 'UPDATE_NEWS',
        news: response.recordset || [],
      })
    },
    error => {
      dispatch({
        type: 'UPDATE_NEWS_FAILURE',
        msg: error.message || '网络连接问题，请重试。'
      })
    }
    // TODO: error handle
  )
}

export const saveNews = (news) => (dispatch,getState) => {
  if(getIsSavingNews(getState())){
    return Promise.resolve()
  }

  dispatch({
    type:'SAVE_NEWS_REQUEST',
  })

  return api.saveNews(news).then(
    response => {
      dispatch({
        type: 'SAVE_NEWS',
      })
      setTimeout(()=>dispatch({
        type: 'REFRESH_SAVE_STATE'
      }),1200)
    },
    error => {
      dispatch({
        type: 'SAVE_NEWS_FAILURE',
        msg: error.message || '网络连接问题，请重试。'
      })
    }
    // TODO: error handle
  )
}

export const deleteNews = (id) => (dispatch,getState) => {
  return api.deleteNews(id).then(
    response => {
      dispatch({
        type: 'DELETE_NEWS',
        id,
      })
    }
  )
}

export const addNews = () => ({
  type: 'ADD_NEWS',
  id: v4(),
})

export const editNewsTitle = (id,title) => ({
  type: 'EDIT_NEWS_TITLE',
  id,
  title,
})

export const editNewsDate = (id,date) => ({
  type: 'EDIT_NEWS_DATE',
  id,
  date,
})

export const editNewsUrl = (id,url) => ({
  type: 'EDIT_NEWS_URL',
  id,
  url,
})

export const editNewsContent = (id,content) => ({
  type: 'EDIT_NEWS_CONTENT',
  id,
  content,
})

export const toggleLogin = () => ({
  type: 'TOGGLE_LOGIN',
})

export const closeAlert = () => ({
  type: 'CLOSE_ALERT',
})

export const openAlert = (msg,id) => ({
  type: 'OPEN_ALERT',
  msg,
  id,
})



// export const changeFilter = (filter) => ({
//   type: 'CHANGE_FILTER',
//   filter,
// })
//
// export const changeCompleted = (completed) => ({
//   type: "CHANGE_COMPLETED_FILTER",
//   completed,
// })
//
// export const toggleUser = (id) => (dispatch,getState) => {
//   api.toggleUser(id).then(
//     () => {
//       dispatch({
//         type: 'TOGGLE_USER_COMPLETE',
//         id,
//       })
//     }
//   )
// }
