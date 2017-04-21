import { combineReducers } from 'redux'
import note from './new'

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_NEWS':
    case 'EDIT_NEWS_TITLE':
    case 'EDIT_NEWS_DATE':
    case 'EDIT_NEWS_CONTENT':
    case 'EDIT_NEWS_URL':
      return {
        ...state,
        [action.id]:note(state[action.id],action)
      }
    case "UPDATE_NEWS":
      const nextState = {...state}
      action.news.forEach(n => {
        //如果没,给初始值
        if(!n.title){
          n.title = ''
        }
        if(!n.date){
          n.date = ''
        }
        if(!n.content){
          n.content = ''
        }
        if(!n.url){
          n.url = ''
        }
        nextState[n.id] = n
      })
      return nextState
    default:
      return state
  }
}

const allIds = (state=[], action) => {
  switch (action.type) {
    case 'UPDATE_NEWS':
      return action.news.map(n => n.id)
    case 'ADD_NEWS':
      return [...state,action.id]
    case 'DELETE_NEWS':
      return state.filter(id => id !== action.id)
    default:
      return state
  }
}

const isFetching = (state=false, action) => {
  switch (action.type) {
    case 'UPDATE_NEWS_REQUEST':
      return true
    case 'UPDATE_NEWS':
      return false
    case 'UPDATE_NEWS_FAILURE':
      return false
    default:
      return state
  }
}

const isSaving = (state=false, action) => {
  switch (action.type) {
    case 'SAVE_NEWS_REQUEST':
    case 'DELETE_NEWS_REQUEST':
      return true
    case 'SAVE_NEWS':
    case 'DELETE_NEWS':
      return false
    case 'SAVE_NEWS_FAILURE':
    case 'DELETE_NEWS_FAILURE':
      return false
    default:
      return state
  }
}

const saveSucess = (state='normal', action) => {
  switch (action.type) {
    case 'SAVE_NEWS_REQUEST':
    case 'DELETE_NEWS_REQUEST':
      return 'normal'
    case 'SAVE_NEWS':
    case 'DELETE_NEWS':
      return 'success'
    case 'SAVE_NEWS_FAILURE':
    case 'DELETE_NEWS_FAILURE':
      return 'failure'
    case 'REFRESH_SAVE_STATE':
      return 'normal'
    default:
      return state
  }
}

const news = combineReducers({
  allIds,
  byId,
  isFetching,
  isSaving,
  saveSucess,
})

export default news

//get users byId and make it array
export const getAllNews = (news) =>
  news.allIds.map(id => news.byId[id]).reverse()

export const getIsFetchingNews = (news) =>
  news.isFetching

export const getIsSavingNews = (news) =>
  news.isSaving

// const filteredByCompleted = (news,isCompleted) => {
//   switch (isCompleted) {
//     case 'active':
//       return news.filter(u => !u.completed)
//     case 'completed':
//       return news.filter(u => u.completed)
//     default:
//       return news
//   }
// }

// export const getFilteredNews = (news,filter,isCompleted='all') => {
//   const allNews = getAllNews(news)
//   const isCompletedNews = filteredByCompleted(allNews,isCompleted)
//   const filteredNews = isCompletedNews.filter(n => {
//     return n.huodong !== '量房' &&
//     (
//       n.name.includes(filter) ||
//       n.phone.includes(filter) ||
//       n.address.includes(filter) ||
//       n.huodong.includes(filter)
//     )
//   })
//   return filteredNews
// }
