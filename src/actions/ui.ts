import { UiAppAction, types } from "../types/types";


export const uiOpenCart = (): UiAppAction => ({
    type: types.uiOpenCart
});

export const uiCloseCart = (): UiAppAction => ({
    type: types.uiCloseCart
});
