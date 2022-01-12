import { createTypes } from "./types";
import { cryptoNewsService } from "../services/cryptoNewsService";

export const cryptoNewsActions = {
    getCryptoNews
};

function getCryptoNews() {
    console.log('dd')
    return async dispatch => {
        try {
            dispatch(clearExisting());
            dispatch(request());

            let news = await cryptoNewsService.getCryptoNews();

            dispatch(success(news));
        } catch (error) {
            dispatch(failure(error));
        }
    };

    function clearExisting() {
        return { type: createTypes.GET_CRYPTO_NEWS }
    }

    function request() {
        return { type: createTypes.GET_CRYPTO_NEWS_REQUEST }
    }

    function success(news) {
        return { type: createTypes.GET_CRYPTO_NEWS_SUCCESS, news }
    }

    function failure(error) {
        return { type: createTypes.GET_CRYPTO_NEWS_FAILURE, error }
    }
}