import {
  USER_DETAILS_REQUEST_SUCCESS,
  USER_DETAILS_REQUEST,
  USER_DETAILS_REQUEST_FAIL,
} from "./user-details-constants";

import axios from "axios";

export const userDetailsActions = () => async (dispatch, getState) => {
  const {
    userLogin: { userInfo },
  } = getState();

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `token ${userInfo.token}`,
    },
  };
  try {
    dispatch({ type: USER_DETAILS_REQUEST });

    const { data } = await axios.get("/api/accounts/profile/", config);
    dispatch({ type: USER_DETAILS_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_REQUEST_FAIL,
      payload:
        error.response && error.response.data
          ? Object.values(error.response.data)
          : error.message,
    });
  }
};
