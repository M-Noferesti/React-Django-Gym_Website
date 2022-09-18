import axios from "axios";
import {
  GET_ENROLLMENT_HISTORY,
  GET_ENROLLMENT_HISTORY_FAIL,
} from "./constants";

export const getEnrollmentHistoryAction = () => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `token ${userInfo.token}`,
      },
    };
    const EnrolledClassesHistoryData = await axios.get(
      "/api/user_enrollment_history/",
      config
    );

    dispatch({
      type: GET_ENROLLMENT_HISTORY,
      payload: EnrolledClassesHistoryData.data,
    });
    localStorage.setItem(
      "enrollmentHistory",
      JSON.stringify(getState().enrollmentHistory)
    );
  } catch (error) {
    dispatch({
      type: GET_ENROLLMENT_HISTORY_FAIL,
      payload:
        error.response && error.response.data
          ? Object.values(error.response.statusText)
          : error.message,
    });
  }
};
