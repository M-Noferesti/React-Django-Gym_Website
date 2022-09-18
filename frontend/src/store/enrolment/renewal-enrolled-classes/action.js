import axios from "axios";
import {
  RENEWAL_ATTENDING_CLASS_SUCCESS,
  RENEWAL_ATTENDING_CLASS_FAIL,
  RENEWAL_ONLINE_CLASS_SUCCESS,
  RENEWAL_ONLINE_CLASS_FAIL,
} from "./constants";

export const renewalAttendingClassesAction =
  (id, attending_class_id, period) => async (dispatch, getState) => {
    console.log({ id, attending_class_id, period });
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
      const renawalData = await axios.post(
        `/api/attending_classes_requests/renewal/${id}`,
        { period: period, attending_class_id: attending_class_id },
        config
      );

      dispatch({
        type: RENEWAL_ATTENDING_CLASS_SUCCESS,
        payload: { id: id },
      });
      localStorage.setItem(
        "enrolledClasses",
        JSON.stringify(getState().enrolledClasses)
      );
    } catch (error) {
      dispatch({
        type: RENEWAL_ATTENDING_CLASS_FAIL,
        payload: {
          error:
            error.response && error.response.data
              ? Object.values(error.response.statusText)
              : error.message,
          id: id,
        },
      });
    }
  };

export const renewalOnlineClassesAction =
  (id, online_class_id, period) => async (dispatch, getState) => {
    console.log({ id, online_class_id, period });
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
      const renawalData = await axios.post(
        `/api/online_classes_requests/renewal/${id}`,
        { period: period, online_class_id: online_class_id },
        config
      );

      dispatch({
        type: RENEWAL_ONLINE_CLASS_SUCCESS,
        payload: { id: id },
      });
      localStorage.setItem(
        "enrolledClasses",
        JSON.stringify(getState().enrolledClasses)
      );
    } catch (error) {
      dispatch({
        type: RENEWAL_ONLINE_CLASS_FAIL,
        payload: {
          error:
            error.response && error.response.data
              ? Object.values(error.response.statusText)
              : error.message,
          id: id,
        },
      });
    }
  };
