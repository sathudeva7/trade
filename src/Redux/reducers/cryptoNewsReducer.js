import { createTypes } from "../actions/types";

const initialState = {
    isLoading: false,
    error: false,
    news: []
};

export function cryptoNewsReducer(state = initialState, action) {
    switch (action.type) {
        case createTypes.GET_CRYPTO_NEWS:
            return {
                ...state,
                isLoading: true,
                error: false,
            };
        case createTypes.GET_CRYPTO_NEWS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false
            };
        case createTypes.GET_CRYPTO_NEWS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                news: [action.news]
            };
        case createTypes.GET_CRYPTO_NEWS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true,
                news: []
            };
        default:
            return state;
    }
}