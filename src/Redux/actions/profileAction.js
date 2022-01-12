import { createTypes } from "./types";
import { profileService } from "../services/profileService";

export const profileActions ={
    getProfile
}

function getProfile() {
    return async dispatch => {
        try {
            dispatch(clearExisting());
            dispatch(request());

            let profile = await profileService.getProfile();
            
            dispatch(success(profile));
        } catch (error) {
            dispatch(failure(error));
        }
    };

    function clearExisting() {
        return {type: createTypes.GET_PROFILE}
    }

    function request() {
        return {type: createTypes.GET_PROFILE_REQUEST}
    }

    function success(profile) {
        return {type: createTypes.GET_PROFILE_SUCCESS, profile}
    }

    function failure(error) {
        return {type: createTypes.GET_PROFILE_FAILURE, error}
    }
}