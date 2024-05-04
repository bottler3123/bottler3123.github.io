import { combineReducers } from "@reduxjs/toolkit";
import backgroundReducer from "./backgroundReducer";
import pageReducer from "./pageReducer";

export const rootReducer = combineReducers({
    background : backgroundReducer,
    page : pageReducer
})