import { combineReducers } from 'redux'
import login from './login'
import members, * as fromMembers from './members'
import news,* as fromNews from './news'
import alert from './alertControl'
import bannerInfo from './bannerInfo'
import filter from './filter'
import completed from './completed'


const app = combineReducers({
  members,
  news,
  login,
  alert,
  bannerInfo,
  filter,
  completed,
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

export const getFilteredMembers = (store) => {
  const { members,filter,completed } = store
  return fromMembers.getFilteredMembers(members,filter,completed)
}

export const getIsFetchingMembers = (store) => {
  return fromMembers.getIsFetchingMembers(store.members)
}
