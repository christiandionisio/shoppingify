import { Reducer } from "redux";
import { types, UiAppAction, UiAppState } from "../types/types";


const initialState: UiAppState = {
    modalOpen: false,
    addItemOpen: false,
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

        case types.uiOpenAddItem:

            return {
                ...state,
                addItemOpen: true,
            };

        case types.uiCloseAddItem:
            
            return {
                ...state,
                addItemOpen: false,
            };
    
        default:
            return state;
    }

}
