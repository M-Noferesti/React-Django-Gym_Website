import {
  GET_ATTENDING_CLASSES_LIST_REQUEST,
  GET_ATTENDING_CLASSES_LIST_REQUEST_SUCCESS,
  GET_ATTENDING_CLASSES_LIST_REQUEST_FAIL,
  GET_ONLINE_CLASSES_LIST_REQUEST,
  GET_ONLINE_CLASSES_LIST_REQUEST_SUCCESS,
  GET_ONLINE_CLASSES_LIST_REQUEST_FAIL,
} from "./classes-list-constants";

const attendingClassesListReducers = (
  state = { attending_classes: [] },
  action
) => {
  switch (action.type) {
    case GET_ATTENDING_CLASSES_LIST_REQUEST:
      return {
        loading: true,
        state,
      };

    case GET_ATTENDING_CLASSES_LIST_REQUEST_SUCCESS:
      return {
        loading: false,
        attending_classes: action.payload,
      };

    case GET_ATTENDING_CLASSES_LIST_REQUEST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export default attendingClassesListReducers;
