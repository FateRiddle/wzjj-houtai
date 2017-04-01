import { combineReducers } from 'redux'
import login from './login'
import filter from './filter'
import completed from './completed'
import users,* as fromUsers from './users'
import appointments,* as fromApps from './appointments'


const app = combineReducers({
  users,
  appointments,
  filter,
  completed,
  login,
})

export default app

export const getFilteredUsers = (store) => {
  return fromUsers.getFilteredUsers(store.users,store.filter,store.completed)
}

export const getFilteredLiangfangs = (store) => {
  return fromUsers.getFilteredLiangfangs(store.users,store.filter,store.completed)
}

export const getFilteredAppointments = (store) => {
  return fromApps.getFilteredAppointments(store.appointments,store.filter,store.completed)
}

export const getIsFetchingUsers = (store) => {
  return fromUsers.getIsFetchingUsers(store.users)
}

export const getIsFetchingApps = (store) => {
  return fromApps.getIsFetchingApps(store.appointments)
}
