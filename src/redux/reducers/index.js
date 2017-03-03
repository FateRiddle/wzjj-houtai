import { combineReducers } from 'redux'
import users from './users'
import filter from './filter'
import login from './login'
import * as fromUsers from './users'


const app = combineReducers({
  users,
  filter,
  login,
})

export default app

export const getFilteredUsers = (store) => {
  return fromUsers.getFilteredUsers(store.users,store.filter)
}
