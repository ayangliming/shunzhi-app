import {combineReducers} from "redux"
import appReducer from "./appReducer.js"
import accountReducer from "./accountReducer.js"
import dishReducer from "./dishReducer.js"
import cartReducer from "./cartReducer.js"
import commentReducer from "./commentReducer.js"
const rootReducer = combineReducers({
  account:accountReducer,
  app:appReducer,
  dish:dishReducer,
  cart:cartReducer,
  comment:commentReducer
})

export default rootReducer
