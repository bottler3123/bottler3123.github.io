import { combineReducers } from "@reduxjs/toolkit";
import backgroundReducer from "./backgroundReducer";

export const rootReducer = combineReducers({
    background : backgroundReducer
})