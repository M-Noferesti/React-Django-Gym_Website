import {
  CLASS_DETAILS_REQUEST,
  CLASS_DETAILS_REQUEST_SUCCESS,
  CLASS_DETAILS_REQUEST_FAIL,
} from "./class-details-constants";
const classDetailsReducers = (state = { currentClass: {} }, action) => {
  switch (action.type) {
    case CLASS_DETAILS_REQUEST:
      return { loading: true };

    case CLASS_DETAILS_REQUEST_SUCCESS:
      return { loading: false, currentClass: action.payload };

    case CLASS_DETAILS_REQUEST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export default classDetailsReducers;
