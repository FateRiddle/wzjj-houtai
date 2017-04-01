import { combineReducers } from 'redux'
import appointment from './appointment'

const byId = (state = {}, action) => {
  switch (action.type) {
    case "TOGGLE_APP_COMPLETE":
    case "EDIT_APP_MEMO":
      return {
        ...state,
        [action.id]:appointment(state[action.id],action)
      }
    case "UPDATE_APP":
      const nextState = {...state}
      action.appointments.forEach(app => {
        //如果没定义，是否处理和备注两项给初始值
        if(!app.completed){
          app.completed = false
        }
        if(!app.memo){
          app.memo = ''
        }
        nextState[app.id] = app
      })
      return nextState
    default:
      return state
  }
}

const allIds = (state=[], action) => {
  switch (action.type) {
    case 'UPDATE_APP':
      console.log(action.appointments.map(app => app.id));
      return action.appointments.map(app => app.id)
    default:
      return state
  }
}

const isFetching = (state=false, action) => {
  switch (action.type) {
    case 'UPDATE_APP_REQUEST':
      return true
    case 'UPDATE_APP':
      return false
    case 'UPDATE_APP_FAILURE':
      return false
    default:
      return state
  }
}

const appointments = combineReducers({
  allIds,
  byId,
  isFetching,
})

export default appointments

//get users byId and make it array
const getAllApps = (apps) =>
  apps.allIds.map(id => apps.byId[id])

const filteredByCompleted = (apps,isCompleted) => {
  switch (isCompleted) {
    case 'active':
      return apps.filter(app => !app.completed)
    case 'completed':
      return apps.filter(app => app.completed)
    default:
      return apps
  }
}

export const getFilteredAppointments = (apps,filter,isCompleted) => {
  const allApps = getAllApps(apps)
  const isCompletedApps = filteredByCompleted(allApps,isCompleted)
  const filteredApps = isCompletedApps.filter(app => {
    return (app.name || '').includes(filter) ||
      (app.phone || '').includes(filter) ||
      (app.bao || '').includes(filter) ||
      (app.kuan || '').includes(filter) ||
      (app.price || '').includes(filter) ||
      (app.memo || '').includes(filter)
  })
  return filteredApps
}

export const getIsFetchingApps = (apps) => apps.isFetching
