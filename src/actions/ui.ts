import { UiAppAction, types } from "../types/types";


export const uiOpenCart = (): UiAppAction => ({
    type: types.uiOpenCart
});

export const uiCloseCart = (): UiAppAction => ({
    type: types.uiCloseCart
});

export const uiOpenAddItem = (): UiAppAction => ({
    type: types.uiOpenAddItem
});

export const uiCloseAddItem = (): UiAppAction => ({
    type: types.uiCloseAddItem
});

