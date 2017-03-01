import { combineReducers } from 'redux'
import currentTab from './currentTab'
import currentPiece from './currentPiece'
import pieces from './pieces'

const app = combineReducers({
  currentTab,
  currentPiece,
  pieces,
})

export default app
