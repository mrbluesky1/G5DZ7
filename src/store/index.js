import {configureStore, combineReducers} from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

const reducer = combineReducers({
    todoReducer
})

export const store = configureStore({
    reducer
})