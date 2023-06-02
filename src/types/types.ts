
export interface UiAppState {
    modalOpen: boolean;
}


export type UiAppAction = {
    type: string;
};

export const types = {
    uiOpenCart: '[ui] Open cart',
    uiCloseCart: '[ui] Close cart',
}
