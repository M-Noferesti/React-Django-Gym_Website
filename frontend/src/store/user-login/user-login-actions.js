import axios from "axios";
import { SYNC_USER_REQUESTS } from "../enrolment/enrolment-requests/attending-classes/constants";
import { USER_DETAILS_RESET } from "../user-details/user-details-constants";
import { RESET_ENROLLED_CLASSES } from "./../enrolment/enrolled_classes/constants";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "./user-login-constants";

const configLogin = {
  headers: {
    "Content-type": "application/json",
  },
};

export const userLoginActions =
  (username, password) => async (dispatch, getState) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });
      const { data } = await axios.post(
        "/api/accounts/jwt_token/",
        {
          username: username,
          password: password,
        },
        configLogin
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

      const {
        userLogin: { userInfo },
      } = getState();

      const { requestedClasses } = getState();

      const submitData = {
        attending_classes: requestedClasses.attending_classes.map((x) => ({
          id: x.attending_class.id,
          period: x.period,
          price: x.price,
        })),
        online_classes: requestedClasses.online_classes.map((x) => ({
          id: x.online_class.id,
          title: x.online_class.title,
          period: x.period,
          price: x.price,
        })),
        total_price: requestedClasses.total_price,
        is_paid: false,
      };

      const configRequests = {
        headers: {
          "Content-type": "application/json",
          Authorization: `token ${userInfo.token}`,
        },
      };

      await axios.post("/api/sync_user_requests/", submitData, configRequests);
      const syncedData = await axios.get(
        "/api/sync_user_requests/",
        configRequests
      );
      dispatch({
        type: SYNC_USER_REQUESTS,
        payload: syncedData.data,
      });

      localStorage.setItem(
        "requestedClasses",
        JSON.stringify(getState().requestedClasses)
      );
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data
            ? Object.values(error.response.data)
            : error.message,
      });
    }
  };

export const userLogoutActions = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("requestedClasses");
  localStorage.removeItem("enrolledClasses");
  localStorage.removeItem("enrollmentHistory");
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: "RESET_REQUESTS" });
  dispatch({ type: RESET_ENROLLED_CLASSES });
  dispatch({ type: USER_DETAILS_RESET });
};
