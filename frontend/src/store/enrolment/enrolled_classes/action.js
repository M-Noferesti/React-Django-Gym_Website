import axios from "axios";
import {
  GET_ENROLLED_ONLINE_CLASSES,
  GET_ENROLLED_ATTENDING_CLASSES,
  GET_ENROLLED_ATTENDING_CLASSES_FAIL,
  GET_ENROLLED_ONLINE_CLASSES_FAIL,
} from "./constants";

export const enrolledAttendingClassesAction =
  () => async (dispatch, getState) => {
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
      const EnrolledClassesData = await axios.get(
        "/api/attending_classes_requests/enrolled",
        config
      );

      dispatch({
        type: GET_ENROLLED_ATTENDING_CLASSES,
        payload: EnrolledClassesData.data,
      });
      localStorage.setItem(
        "enrolledClasses",
        JSON.stringify(getState().enrolledClasses)
      );
    } catch (error) {
      dispatch({
        type: GET_ENROLLED_ATTENDING_CLASSES_FAIL,
        payload:
          error.response && error.response.data
            ? Object.values(error.response.statusText)
            : error.message,
      });
    }
  };

export const enrolledOnlineClassesAction = () => async (dispatch, getState) => {
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
    const EnrolledClassesData = await axios.get(
      "/api/online_classes_requests/enrolled",
      config
    );

    dispatch({
      type: GET_ENROLLED_ONLINE_CLASSES,
      payload: EnrolledClassesData.data,
    });
    localStorage.setItem(
      "enrolledClasses",
      JSON.stringify(getState().enrolledClasses)
    );
  } catch (error) {
    dispatch({
      type: GET_ENROLLED_ONLINE_CLASSES_FAIL,
      payload:
        error.response && error.response.data
          ? Object.values(error.response.statusText)
          : error.message,
    });
  }
};
