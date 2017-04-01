import * as api from '../../api/fetchData'
import { getIsFetchingUsers,getIsFetchingApps } from '../reducers'

export const updateUser = () => (dispatch, getState) => {
  //如果已经在fetch，不再fetch第二次
  if(getIsFetchingUsers(getState())){
    return Promise.resolve()
  }

  dispatch({
    type:'UPDATE_USER_REQUEST',
  })

  return api.fetchUser().then(
    response => {
      dispatch({
        type: 'UPDATE_USER',
        users: response.recordset,
      })
    },
    error => {
      dispatch({
        type: 'UPDATE_USER_FAILURE',
        msg: error.message || '网络连接问题，请重试。'
      })
    }
    // TODO: error handle
  )
}

export const updateApp = () => (dispatch, getState) => {
  //如果已经在fetch，不再fetch第二次
  if(getIsFetchingApps(getState())){
    return Promise.resolve()
  }
  dispatch({
    type:'UPDATE_APP_REQUEST',
  })

  return api.fetchAppointment().then(
    response => {
      dispatch({
        type:'UPDATE_APP',
        appointments: response.recordset,
      })
    },
    error => {
      dispatch({
        type: 'UPDATE_APP_FAILURE',
        msg: error.message || '网络连接问题，请重试。'
      })
    }
  )
}

export const changeFilter = (filter) => ({
  type: 'CHANGE_FILTER',
  filter,
})

export const changeCompleted = (completed) => ({
  type: "CHANGE_COMPLETED_FILTER",
  completed,
})

export const toggleUser = (id) => (dispatch,getState) => {
  api.toggleUser(id).then(
    () => {
      dispatch({
        type: 'TOGGLE_USER_COMPLETE',
        id,
      })
    }
  )
}

export const toggleApp = (id) => (dispatch,getState) => {
  api.toggleApp(id).then(
    () => {
      dispatch({
        type: 'TOGGLE_APP_COMPLETE',
        id,
      })
    }
  )
}

export const editAppMemo = (id,memo) => ({
  type: 'EDIT_APP_MEMO',
  id,
  memo,
})

export const editUserMemo = (id,memo) => ({
  type: 'EDIT_USER_MEMO',
  id,
  memo,
})

export const toggleLogin = () => ({
  type: 'TOGGLE_LOGIN',
})
