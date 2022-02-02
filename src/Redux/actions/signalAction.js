import { createTypes } from "./types";
import { signalService } from "../services/signalService";

export const signalActions = {
    getSignals,
    searchSignals,
    postSignals
}

function getSignals(id) {
    console.log('kk', id)
    return async dispatch => {
        try {
            dispatch(clearExisting());
            dispatch(request());

            let signals = await signalService.getSignals(id);
            
            dispatch(success(signals));
        } catch (error) {
            dispatch(failure(error));
        }
    };

    function clearExisting() {
        return {type: createTypes.GET_SIGNALS}
    }

    function request() {
        return {type: createTypes.GET_SIGNALS_REQUEST}
    }

    function success(signals) {
        return {type: createTypes.GET_SIGNALS_SUCCESS, signals}
    }

    function failure(error) {
        return {type: createTypes.GET_SIGNALS_FAILURE, error}
    }
}

function postSignals(newSignal ) {
    return async dispatch => {
        try { 
            dispatch(clearExisting());
            dispatch(request());

            let signals = await signalService.postSignals(newSignal);
            
            dispatch(success(signals));
        } catch (error) {
            dispatch(failure(error));
        }
    };

    function clearExisting() {
        return {type: createTypes.POST_SIGNALS}
    }

    function request() {
        return {type: createTypes.POST_SIGNALS_REQUEST}
    }

    function success(signals) {
        return {type: createTypes.POST_SIGNALS_SUCCESS, signals}
    }

    function failure(error) {
        return {type: createTypes.POST_SIGNALS_FAILURE, error}
    }
    
}

function searchSignals(coin) {
    return async dispatch => {
        try {
            dispatch(clearExisting());
            dispatch(request());

            let searchSignal = await signalService.searchSignals(coin);
            
            dispatch(success(searchSignal));
        } catch (error) {
            dispatch(failure(error));
        }
    };

    function clearExisting() {
        return {type: createTypes.GET_SEARCH_SIGNAL}
    }

    function request() {
        return {type: createTypes.GET_SEARCH_SIGNAL_REQUEST}
    }

    function success(searchSignal) {
        return {type: createTypes.GET_SEARCH_SIGNAL_SUCCESS, searchSignal}
    }

    function failure(error) {
        return {type: createTypes.GET_SEARCH_SIGNAL_FAILURE, error}
    }
}