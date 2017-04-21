import { combineReducers } from 'redux'
import member from './member'

const byId = (state = {}, action) => {
  switch (action.type) {
    case "TOGGLE_MEMBER_COMPLETE":
    case "EDIT_MEMBER_MEMO":
      return {
        ...state,
        [action.id]:member(state[action.id],action)
      }
    case "UPDATE_MEMBER":
      const nextState = {...state}
      action.members.forEach(member => {
        //如果没定义，是否处理和备注两项给初始值
        if(!member.completed){
          member.completed = false
        }
        if(!member.memo){
          member.memo = ''
        }
        nextState[member.id] = member
      })
      return nextState
    default:
      return state
  }
}

const allIds = (state=[], action) => {
  switch (action.type) {
    case 'UPDATE_MEMBER':
      return action.members.map(member => member.id)
    default:
      return state
  }
}

const isFetching = (state=false, action) => {
  switch (action.type) {
    case 'UPDATE_MEMBER_REQUEST':
      return true
    case 'UPDATE_MEMBER':
      return false
    case 'UPDATE_MEMBER_FAILURE':
      return false
    default:
      return state
  }
}

const members = combineReducers({
  allIds,
  byId,
  isFetching,
})

export default members

//get members byId and make it array
const getAllMembers = (members) =>
  members.allIds.map(id => members.byId[id])

const filteredByCompleted = (members,completed) => {
  switch (completed) {
    case 'active':
      return members.filter(u => !u.completed)
    case 'completed':
      return members.filter(u => u.completed)
    default:
      return members
  }
}

export const getFilteredMembers = (members,filter,completed='all') => {
  const allMembers = getAllMembers(members)
  const completedMembers = filteredByCompleted(allMembers,completed)
  console.log(completedMembers);
  const filteredMembers = completedMembers.filter(member => {
    return member.name.includes(filter) ||
    member.phone.includes(filter) ||
    member.city.includes(filter) ||
    member.huodong.includes(filter)
  })
  return filteredMembers
}

export const getIsFetchingMembers = (members) => members.isFetching
