
export interface UiAppState {
    modalOpen: boolean;
    addItemOpen: boolean;
}


export type UiAppAction = {
    type: string;
};

export const types = {
    uiOpenCart: '[ui] Open cart',
    uiCloseCart: '[ui] Close cart',
    uiOpenAddItem: '[ui] Open add item',
    uiCloseAddItem: '[ui] Close add item',
}
