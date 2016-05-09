import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as awaitReducer } from 'redux-await'
import { reducer as reduxAsyncConnect } from 'redux-async-connect'
import { reducer as app } from './app'

export default combineReducers({
  await: awaitReducer,
  reduxAsyncConnect,
  routing: routerReducer,
  app
})
