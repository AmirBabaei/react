import { combineReducers } from 'redux'
import { reducer } from 'redux-form'
import authReducer from "./authReducer"

export default combineReducers({
  auth: authReducer,
  form: reducer // took it from the redux-for lib
})