import {createStore} from "redux"
import rootReducer from "./reduxs/index.js"

const store = createStore(rootReducer)

export default store
