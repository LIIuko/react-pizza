import {filters} from "./reducers/filters";
import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {pizzas} from "./reducers/pizzas";


const rootReducer = combineReducers({
    filters,
    pizzas
})

export const store = configureStore({
    reducer: rootReducer
});