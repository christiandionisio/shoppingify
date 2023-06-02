import { Reducer } from "react";
import { types, UiAppAction, UiAppState } from "../types/types";


const initialState: UiAppState = {
    modalOpen: false,
}

export const uiReducer: Reducer<UiAppState, UiAppAction>  = (state = initialState, action) => {

    switch (action.type) {
        case types.uiOpenCart:
            
            return {
                ...state,
                modalOpen: true,
            };

        case types.uiCloseCart:
            
            return {
                ...state,
                modalOpen: false,
            };
    
        default:
            return state;
    }

}
