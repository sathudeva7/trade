import { createTypes } from "../actions/types";

const initialState = {
    isLoading: false,
    error: false,
    data:[]
};

export function cryptoReducer(state = initialState, action) {
    switch (action.type) {
        case createTypes.GET_CRYPTO_DATA:
            return {
                ...state,
                isLoading: true,
                error: false,
            };
        case createTypes.GET_CRYPTO_DATA_REQUEST:
            return {
                data: [...state.data],
                isLoading: true,
                error: false
            };
        case createTypes.GET_CRYPTO_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                data: [...state.data, action.data]
            };
        case createTypes.GET_CRYPTO_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true,
                data: [...state.data, []]
            };
        default:
            return state;
    }
}