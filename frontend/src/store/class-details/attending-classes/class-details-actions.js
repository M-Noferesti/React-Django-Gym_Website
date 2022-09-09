import {
  CLASS_DETAILS_REQUEST,
  CLASS_DETAILS_REQUEST_SUCCESS,
  CLASS_DETAILS_REQUEST_FAIL,
} from "./class-details-constants";

import axios from "axios";

export const classDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: CLASS_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/classes/attending-classes/${id}`);

    dispatch({ type: CLASS_DETAILS_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CLASS_DETAILS_REQUEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
