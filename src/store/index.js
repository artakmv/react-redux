import {applyMiddleware, combineReducers, createStore} from '@reduxjs/toolkit'
import {cashReducer} from './cashReducer'
import {customerReducer} from './customerReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  cash: cashReducer,
  customer: customerReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))