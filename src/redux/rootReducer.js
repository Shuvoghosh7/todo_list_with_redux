import { combineReducers } from "redux";
import todoReducer from './todos/reducer'
import filterReducer from './filter/reducer'

const rootreducer= combineReducers({
    todos:todoReducer,
    filter:filterReducer
})

export default rootreducer;