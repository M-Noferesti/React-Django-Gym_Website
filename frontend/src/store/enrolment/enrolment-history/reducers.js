import {
  GET_ENROLLMENT_HISTORY_FAIL,
  GET_ENROLLMENT_HISTORY,
} from "./constants";
export const enrollmentHistoryReducers = (state = {}, action) => {
  const item = action.payload;
  switch (action.type) {
    case GET_ENROLLMENT_HISTORY:
      return {
        history: [...item],
      };

    case GET_ENROLLMENT_HISTORY_FAIL:
      return { get_history_error: item };

    default:
      return state;
  }
};
