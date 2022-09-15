import {
  USER_DETAILS_UPDATE_REQUEST,
  USER_DETAILS_UPDATE_REQUEST_SUCCESS,
  USER_DETAILS_UPDATE_REQUEST_FAIL,
} from "./constants";

export const userDetailsUpdateReducers = (state = {}, action) => {
  switch (action.type) {
    case USER_DETAILS_UPDATE_REQUEST:
      return { ...state, loading_set: true };

    case USER_DETAILS_UPDATE_REQUEST_SUCCESS:
      return { ...state, loading_set: false, success: true };

    case USER_DETAILS_UPDATE_REQUEST_FAIL:
      return { ...state, loading_set: false, error_from_set: action.payload };

    default:
      return state;
  }
};
