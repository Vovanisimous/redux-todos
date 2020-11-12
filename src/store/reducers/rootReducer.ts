import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { todosReducer } from "./todosReducer";

export const rootReducer = combineReducers({
   todos: todosReducer,
   app: appReducer,
})