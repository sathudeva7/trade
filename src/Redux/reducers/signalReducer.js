import { createTypes } from "../actions/types";

const initialState = {
    isLoading: false,
    isError: false,
    signals: [],
    searchSignal:'',
    newSignal:''
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

        case createTypes.GET_SEARCH_SIGNAL:
            return {
                ...state,
                isLoading: true,
                isError: false,
                searchSignal: ''
            };
        case createTypes.GET_SEARCH_SIGNAL_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case createTypes.GET_SEARCH_SIGNAL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                searchSignal: action.searchSignal
            };
        case createTypes.GET_SEARCH_SIGNAL_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                searchSignal: ''
            };
        
        case createTypes.POST_SIGNALS:
            return {
                ...state,
                isLoading: true,
                isError: false,
                newSignal: ''
            };
        case createTypes.POST_SIGNALS_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case createTypes.POST_SIGNALS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                newSignal: action.newSignal
            };
        case createTypes.POST_SIGNALS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                newSignal: ''
            };
        default:
            return state;
    }
}