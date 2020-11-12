import { AppActionTypes, TOGGLE_SHOW_STATE } from "../types";

const initialState = {
    show: "all",
};

export const appReducer = (state = initialState, action: AppActionTypes) => {
    switch (action.type) {
        case TOGGLE_SHOW_STATE: {
            return {
                ...state,
                show: action.payload,
            };
        }
        default:
            return state;
    }
};
