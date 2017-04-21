import { combineReducers } from 'redux'
import login from './login'
import news,* as fromNews from './news'
import alert from './alertControl'
import bannerInfo from './bannerInfo'


const app = combineReducers({
  news,
  login,
  alert,
  bannerInfo,
})

export default app

export const getAllNews = (store) => {
  return fromNews.getAllNews(store.news)
}

export const getIsFetchingNews = (store) => {
  return fromNews.getIsFetchingNews(store.news)
}

export const getIsSavingNews = (store) => {
  return fromNews.getIsSavingNews(store.news)
}
