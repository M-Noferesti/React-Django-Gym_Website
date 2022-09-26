import {
  COACHES_LIST_REQUEST,
  COACHES_LIST_REQUEST_SUCCESS,
  COACHES_LIST_REQUEST_FAIL,
} from "./coaches-list-constants";
const coachesListReducers = (state = { coaches: [] }, action) => {
  switch (action.type) {
    case COACHES_LIST_REQUEST:
      return { loading: true, coaches: [] };

    case COACHES_LIST_REQUEST_SUCCESS:
      return { loading: false, coaches: action.payload };

    case COACHES_LIST_REQUEST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export default coachesListReducers;
