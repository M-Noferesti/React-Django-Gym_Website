import {
  COACHES_LIST_REQUEST,
  COACHES_LIST_REQUEST_SUCCESS,
  COACHES_LIST_REQUEST_FAIL,
} from "./coaches-list-constants";

import axios from "axios";

export const coachesListAction = (page) => async (dispatch) => {
  try {
    dispatch({ type: COACHES_LIST_REQUEST });
    const { data } = await axios.get(`/api/coaches/?page=${page}`);

    dispatch({ type: COACHES_LIST_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: COACHES_LIST_REQUEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
