import { createTypes } from "./types";
import { cryptoEventService } from '../services/cryptoEventService';

export const cryptoEventActions = {
    getCryptoEvents
};

function getCryptoEvents() {
    return async dispatch => {
        try {
            dispatch(clearExisting());
            dispatch(request());

            let events = await cryptoEventService.getCryptoEvents();

            dispatch(success(events));
        } catch (error) {
            dispatch(failure(error));
        }
    };

    function clearExisting() {
        return { type: createTypes.GET_CRYPTO_EVENTS }
    }

    function request() {
        return { type: createTypes.GET_CRYPTO_EVENTS_REQUEST }
    }

    function success(events) {
        return { type: createTypes.GET_CRYPTO_EVENTS_SUCCESS, events }
    }

    function failure(error) {
        return { type: createTypes.GET_CRYPTO_EVENTS_FAILURE, error }
    }
}