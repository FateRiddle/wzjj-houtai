import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import { pieces } from './data'
import app from './reducers'

// const thunk = (store) => (next) => (action) => {
//   if(typeof action.then === 'function') {
//     return action.then(next)
//   }
//   return next(action)
// }

const configureStore = () => {

  const middlewares = [promise]
  //rewrite dispatch
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }
  //wrapDispatchWithMiddlewares(store, middlewares)
  const persistedState = {
    pieces,
  }

  return createStore(
    app,
    persistedState,
    applyMiddleware(...middlewares),
  )
}

export default configureStore
