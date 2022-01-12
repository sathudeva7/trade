import { createTypes } from "./types";
import { signalService } from "../services/signalService";

export const signalActions = {
    getSignals
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