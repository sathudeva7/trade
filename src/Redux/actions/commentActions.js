import { createTypes } from "./types";
import { commentService } from "../services/commentService";

export const commentActions = {
    getComments
}

function getComments(signalId) {
    return async dispatch => {
        try {
            dispatch(clearExisting());
            dispatch(request());

            let comments = await commentService.getComments(signalId);

            dispatch(success(comments));
        } catch (error) {
            dispatch(failure(error));
        }
    };

    function clearExisting() {
        return { type: createTypes.GET_COMMENTS }
    }

    function request() {
        return { type: createTypes.GET_COMMENTS_REQUEST }
    }

    function success(comments) {
        return { type: createTypes.GET_COMMENTS_SUCCESS, comments }
    }

    function failure(error) {
        return { type: createTypes.GET_COMMENTS_FAILURE, error }
    }
}