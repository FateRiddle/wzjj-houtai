import { combineReducers } from 'redux'
import piece from './piece'

const byId = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_VISIBILITY":
    case "CHANGE_OPTION":
      return {
        ...state,
        [action.id]: piece(state[action.id], action),
      }
    default:
      return state
  }
}

const allIds = (state = [], action) => {
  return state
}

const pieces = combineReducers({
  byId,
  allIds,
})

export default pieces
