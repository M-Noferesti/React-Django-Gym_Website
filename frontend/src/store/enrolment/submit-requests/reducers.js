import { SUBMIT_REQUESTS_FAIL, SUBMIT_REQUESTS_SUCCESS } from "./constants";

export const submitRequestsReducers = (state = {}, action) => {
  switch (action.type) {
    case SUBMIT_REQUESTS_SUCCESS:
      return { success: true };

    case SUBMIT_REQUESTS_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};
