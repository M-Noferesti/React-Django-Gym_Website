import {
  PRIVATE_ONLINE_CLASS_DETAILS_REQUEST,
  PRIVATE_ONLINE_CLASS_DETAILS_REQUEST_FAIL,
  PRIVATE_ONLINE_CLASS_DETAILS_REQUEST_SUCCESS,
  PUBLIC_ONLINE_CLASS_DETAILS_REQUEST,
  PUBLIC_ONLINE_CLASS_DETAILS_REQUEST_FAIL,
  PUBLIC_ONLINE_CLASS_DETAILS_REQUEST_SUCCESS,
} from "./class-details-constants";

const onlineClassDetailsReducers = (state = { currentClass: {} }, action) => {
  switch (action.type) {
    case PRIVATE_ONLINE_CLASS_DETAILS_REQUEST:
      return { loading: true };

    case PRIVATE_ONLINE_CLASS_DETAILS_REQUEST_SUCCESS:
      return { loading: false, currentClass: action.payload };

    case PRIVATE_ONLINE_CLASS_DETAILS_REQUEST_FAIL:
      return { loading: false, error: action.payload };

    case PUBLIC_ONLINE_CLASS_DETAILS_REQUEST:
      return { loading: true };

    case PUBLIC_ONLINE_CLASS_DETAILS_REQUEST_SUCCESS:
      return { loading: false, currentClass: action.payload };

    case PUBLIC_ONLINE_CLASS_DETAILS_REQUEST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export default onlineClassDetailsReducers;
