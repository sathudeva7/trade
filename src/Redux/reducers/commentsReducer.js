import { createTypes } from "../actions/types";

const initialState = {
    isLoading: false,
    isError: false,
    comments: []
};

export function commentsReducer(state = initialState, action) {
    switch (action.type) {
        case createTypes.GET_COMMENTS:
            return {
                ...state,
                isLoading: true,
                isError: false,
                comments: []
            };
        case createTypes.GET_COMMENTS_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case createTypes.GET_COMMENTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                comments: [...state.comments,action.comments]
            };
        case createTypes.GET_COMMENTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                comments: []
            };
        default:
            return state;
    }
}