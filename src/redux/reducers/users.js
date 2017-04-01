import { combineReducers } from 'redux'
import user from './user'

const byId = (state = {}, action) => {
  switch (action.type) {
    case "TOGGLE_USER_COMPLETE":
    case "EDIT_USER_MEMO":
      return {
        ...state,
        [action.id]:user(state[action.id],action)
      }
    case "UPDATE_USER":
      const nextState = {...state}
      action.users.forEach(user => {
        //如果没定义，是否处理和备注两项给初始值
        if(!user.completed){
          user.completed = false
        }
        if(!user.memo){
          user.memo = ''
        }
        nextState[user.id] = user
      })
      return nextState
    default:
      return state
  }
}

const allIds = (state=[], action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return action.users.map(user => user.id)
    default:
      return state
  }
}

const isFetching = (state=false, action) => {
  switch (action.type) {
    case 'UPDATE_USER_REQUEST':
      return true
    case 'UPDATE_USER':
      return false
    case 'UPDATE_USER_FAILURE':
      return false
    default:
      return state
  }
}

const users = combineReducers({
  allIds,
  byId,
  isFetching,
})

export default users

//get users byId and make it array
const getAllUsers = (users) =>
  users.allIds.map(id => users.byId[id])

const filteredByCompleted = (users,isCompleted) => {
  switch (isCompleted) {
    case 'active':
      return users.filter(u => !u.completed)
    case 'completed':
      return users.filter(u => u.completed)
    default:
      return users
  }
}

export const getFilteredUsers = (users,filter,isCompleted='all') => {
  const allUsers = getAllUsers(users)
  const isCompletedUsers = filteredByCompleted(allUsers,isCompleted)
  const filteredUsers = isCompletedUsers.filter(user => {
    return user.huodong !== '量房' &&
    (
      user.name.includes(filter) ||
      user.phone.includes(filter) ||
      user.address.includes(filter) ||
      user.huodong.includes(filter)
    )
  })
  return filteredUsers
}

export const getFilteredLiangfangs = (users,filter,isCompleted='all') => {
  const allUsers = getAllUsers(users)
  const isCompletedUsers = filteredByCompleted(allUsers,isCompleted)
  const filteredLiangfangs = isCompletedUsers.filter(user => {
    return  user.huodong === '量房' &&
    (
      (user.name || '').includes(filter) ||
      (user.phone || '').includes(filter) ||
      (user.address || '').includes(filter) ||
      (user.memo || '').includes(filter)
    )
  })
  return filteredLiangfangs
}

export const getIsFetchingUsers = (users) => users.isFetching
