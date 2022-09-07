import {
  GET_PUBLIC_ONLINE_CLASSES_LIST_REQUEST,
  GET_PUBLIC_ONLINE_CLASSES_LIST_REQUEST_SUCCESS,
  GET_PUBLIC_ONLINE_CLASSES_LIST_REQUEST_FAIL,
  GET_PRIVATE_ONLINE_CLASSES_LIST_REQUEST,
  GET_PRIVATE_ONLINE_CLASSES_LIST_REQUEST_SUCCESS,
  GET_PRIVATE_ONLINE_CLASSES_LIST_REQUEST_FAIL,
} from "./classes-list-constants";

import axios from "axios";

export const getPrivateOnlineClassesListAction = (page) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRIVATE_ONLINE_CLASSES_LIST_REQUEST });

    const { data } = await axios.get(
      `/api/classes/private-online-classes?page=${page}`
    );

    dispatch({
      type: GET_PRIVATE_ONLINE_CLASSES_LIST_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRIVATE_ONLINE_CLASSES_LIST_REQUEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getPublicOnlineClassesListAction = (page) => async (dispatch) => {
  try {
    dispatch({ type: GET_PUBLIC_ONLINE_CLASSES_LIST_REQUEST });
    const { data } = await axios.get(
      `/api/classes/public-online-classes?page=${page}`
    );

    dispatch({
      type: GET_PUBLIC_ONLINE_CLASSES_LIST_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PUBLIC_ONLINE_CLASSES_LIST_REQUEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
