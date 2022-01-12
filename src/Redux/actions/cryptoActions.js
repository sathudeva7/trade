import { createTypes } from "./types";
import { cryptoService } from "../services/cryptoService";

export const cryptoActions = {
    getCryptoData
}

function getCryptoData(cryptoName) {
    return async dispatch => {
            dispatch(clearExisting());
            dispatch(request());

            let data = await cryptoService.getCryptoData(cryptoName)
                .then(
                    data => {
                        dispatch(success(data));
                    },
                    error => {
                        dispatch(failure(error));
                    }
                );
    };

    function clearExisting() {
        return { type: createTypes.GET_CRYPTO_DATA }
    }

    function request() {
        return { type: createTypes.GET_CRYPTO_DATA_REQUEST }
    }

    function success(data) {
        return { type: createTypes.GET_CRYPTO_DATA_SUCCESS, data }
    }

    function failure(error) {
        return { type: createTypes.GET_CRYPTO_DATA_FAILURE, error }
    }
}