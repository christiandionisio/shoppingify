import { combineReducers } from "redux";
import { uiReducer } from "./uiReducer";



export const rootReducer = combineReducers({
    ui: uiReducer,
})

export type RootState = ReturnType<typeof rootReducer>;
