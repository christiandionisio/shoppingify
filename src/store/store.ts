import { rootReducer } from "../reducers/rootReducers";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: rootReducer,
});
