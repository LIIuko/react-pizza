import {filters} from "./reducers/filters";
import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {pizzas} from "./reducers/pizzas";
import {cart} from "./reducers/cart";


const rootReducer = combineReducers({
    filters,
    pizzas,
    cart
})

export const store = configureStore({
    reducer: rootReducer
});