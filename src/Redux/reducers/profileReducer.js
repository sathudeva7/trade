import { createTypes } from "../actions/types";

const initialState = {
    isLoading: false,
    isError: false,
    profile: ''
};

export function profileReducer(state = initialState, action) {
    switch (action.type) {
        case createTypes.GET_PROFILE:
            return {
                ...state,
                isLoading: true,
                isError: false,
                profile: ''
            };
        case createTypes.GET_PROFILE_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case createTypes.GET_PROFILE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                profile: action.profile
            };
        case createTypes.GET_PROFILE_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                profile: ''
            };
        default:
            return state;
    }
}