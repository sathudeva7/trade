import { createTypes } from "../actions/types";

const initialState = {
    isLoading: false,
    isError: false,
    signals: []
};

export function signalReducer(state = initialState, action) {
    switch (action.type) {
        case createTypes.GET_SIGNALS:
            return {
                ...state,
                isLoading: true,
                isError: false,
                signals: []
            };
        case createTypes.GET_SIGNALS_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case createTypes.GET_SIGNALS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                signals: action.signals
            };
        case createTypes.GET_SIGNALS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                signals: []
            };
        default:
            return state;
    }
}