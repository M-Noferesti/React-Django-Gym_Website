import axios from "axios";
import {
  USER_DETAILS_UPDATE_REQUEST,
  USER_DETAILS_UPDATE_REQUEST_SUCCESS,
  USER_DETAILS_UPDATE_REQUEST_FAIL,
} from "./constants";

export const userDetailsUpdateActions =
  (updateData) => async (dispatch, getState) => {
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
      dispatch({ type: USER_DETAILS_UPDATE_REQUEST });
      await axios.put("/api/accounts/profile/", updateData, config);

      dispatch({ type: USER_DETAILS_UPDATE_REQUEST_SUCCESS });
    } catch (error) {
      dispatch({
        type: USER_DETAILS_UPDATE_REQUEST_FAIL,
        payload:
          error.response && error.response.data
            ? Object.values(error.response.data)
            : error.message,
      });
    }
  };
