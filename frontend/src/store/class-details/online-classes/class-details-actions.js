import {
  PRIVATE_ONLINE_CLASS_DETAILS_REQUEST,
  PRIVATE_ONLINE_CLASS_DETAILS_REQUEST_FAIL,
  PRIVATE_ONLINE_CLASS_DETAILS_REQUEST_SUCCESS,
  PUBLIC_ONLINE_CLASS_DETAILS_REQUEST,
  PUBLIC_ONLINE_CLASS_DETAILS_REQUEST_FAIL,
  PUBLIC_ONLINE_CLASS_DETAILS_REQUEST_SUCCESS,
} from "./class-details-constants";

import axios from "axios";

export const privateOnlineClassDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRIVATE_ONLINE_CLASS_DETAILS_REQUEST });
    const { data } = await axios.get(
      `/api/classes/private-online-classes/${id}`
    );

    dispatch({
      type: PRIVATE_ONLINE_CLASS_DETAILS_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRIVATE_ONLINE_CLASS_DETAILS_REQUEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const publicOnlineClassDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: PUBLIC_ONLINE_CLASS_DETAILS_REQUEST });
    const { data } = await axios.get(
      `/api/classes/public-online-classes/${id}`
    );

    dispatch({
      type: PUBLIC_ONLINE_CLASS_DETAILS_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PUBLIC_ONLINE_CLASS_DETAILS_REQUEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
