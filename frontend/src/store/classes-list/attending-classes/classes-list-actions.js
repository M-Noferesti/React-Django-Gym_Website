import {
  GET_ATTENDING_CLASSES_LIST_REQUEST,
  GET_ATTENDING_CLASSES_LIST_REQUEST_SUCCESS,
  GET_ATTENDING_CLASSES_LIST_REQUEST_FAIL,
} from "./classes-list-constants";

import axios from "axios";

export const getAttendingClassesListAction = (page) => async (dispatch) => {
  try {
    dispatch({ type: GET_ATTENDING_CLASSES_LIST_REQUEST });
    const { data } = await axios.get(
      `/api/classes/attending-classes?page=${page}`
    );

    dispatch({
      type: GET_ATTENDING_CLASSES_LIST_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ATTENDING_CLASSES_LIST_REQUEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
