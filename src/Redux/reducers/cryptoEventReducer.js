import { createTypes } from "../actions/types";

const initialState = {
    isLoading: false,
    error: false,
    events: {}
};

export function cryptoEventReducer(state = initialState, action) {
    switch (action.type) {
        case createTypes.GET_CRYPTO_EVENTS:
            return {
                ...state,
                isLoading: true,
                error: false,
            };
        case createTypes.GET_CRYPTO_EVENTS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false
            };
        case createTypes.GET_CRYPTO_EVENTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                events: action.events
            };
        case createTypes.GET_CRYPTO_EVENTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true,
                events: {}
            };
        default:
            return state;
    }
}