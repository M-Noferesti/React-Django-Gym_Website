import {
  USER_DETAILS_REQUEST,
  USER_DETAILS_REQUEST_SUCCESS,
  USER_DETAILS_REQUEST_FAIL,
  USER_DETAILS_RESET,
} from "./user-details-constants";

export const userDetailsReducers = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading_get: true };

    case USER_DETAILS_REQUEST_SUCCESS:
      return { ...state, loading_get: false, user: action.payload };

    case USER_DETAILS_REQUEST_FAIL:
      return { ...state, loading_get: false, error_from_get: action.payload };

    case USER_DETAILS_RESET:
      return { ...state, user: {} };

    default:
      return state;
  }
};
