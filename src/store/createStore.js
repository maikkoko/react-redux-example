import { createStore as _createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import makeRootReducer from './reducers'

const createStore = (initialState = {}) => {
  const history = createHistory()

  const enhancers = []
  const middleware = [thunk, routerMiddleware(history)]

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  )

  const store = _createStore(makeRootReducer(), initialState, composedEnhancers)

  store.history = history
  store.asyncReducers = {}

  return store
}

export default createStore
