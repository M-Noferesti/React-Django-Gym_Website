import axios from "axios";
import { SUBMIT_REQUESTS_SUCCESS, SUBMIT_REQUESTS_FAIL } from "./constants";

export const submitRequestsAction =
  (requestedClasses) => async (dispatch, getState) => {
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
      const { data } = await axios.post(
        "/api/submit_requests/",
        requestedClasses,
        config
      );
      dispatch({
        type: SUBMIT_REQUESTS_SUCCESS,
        payload: data,
      });

      localStorage.removeItem("requestedClasses");
    } catch (error) {
      dispatch({
        type: SUBMIT_REQUESTS_FAIL,
        payload:
          error.response && error.response.data
            ? Object.values(error.response.statusText)
            : error.message,
      });
    }
  };
