import {combineReducers} from "redux"
import appReducer from "./appReducer.js"
import accountReducer from "./accountReducer.js"
import dishReducer from "./dishReducer.js"
import cartReducer from "./cartReducer.js"
const rootReducer = combineReducers({
  account:accountReducer,
  app:appReducer,
  dish:dishReducer,
  cart:cartReducer
})

export default rootReducer
