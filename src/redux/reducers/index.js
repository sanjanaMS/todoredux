import React from "react";
import { TodoReducer } from "./reducer";
import { combineReducers } from "redux";
const allReducers = combineReducers({
  addTodoRed: TodoReducer,
});
export default allReducers;
