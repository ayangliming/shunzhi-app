import {combineReducers} from "redux"
import appReducer from "./appReducer.js"
import accountReducer from "./accountReducer.js"
import dishReducer from "./dishReducer.js"
import cartReducer from "./cartReducer.js"
import commentReducer from "./commentReducer.js"
import userReducer from "./usersReducer.js"
const rootReducer = combineReducers({
  account:accountReducer,
  app:appReducer,
  dish:dishReducer,
  cart:cartReducer,
  comment:commentReducer,
  user:userReducer
})

export default rootReducer
