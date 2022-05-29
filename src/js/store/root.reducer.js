import { combineReducers } from 'redux'
import { wapReducer } from './wap/wap.reducer'
import { userReducer } from './user/user.reducer'

export const rootReducer = combineReducers({
  wapModule: wapReducer,
  userModule: userReducer,
})
