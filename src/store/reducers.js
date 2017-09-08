import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

export const makeRootReducer = asyncReducers => {
  return combineReducers({
    route: routerReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
