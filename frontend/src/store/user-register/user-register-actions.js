import axios from "axios";
import { USER_LOGIN_SUCCESS } from "../user-login/user-login-constants";
import { USER_LOGIN_REQUEST } from "./../user-login/user-login-constants";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "./user-register-constants";

const config = {
  headers: {
    "Content-type": "application/json",
  },
};

export const userRegisterActions =
  (username, email, password, confirm_password) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });
      const { data } = await axios.post(
        "/api/accounts/create_user",
        {
          username: username,
          email: email,
          password: password,
          confirm_password: confirm_password,
        },
        config
      );

      localStorage.setItem("userInfo", JSON.stringify(data));
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

      dispatch({ type: USER_LOGIN_REQUEST });
      const loginData = await axios.post(
        "/api/accounts/jwt_token/",
        {
          username: username,
          password: password,
        },
        config
      );
      localStorage.setItem("userInfo", JSON.stringify(loginData.data));
      dispatch({ type: USER_LOGIN_SUCCESS, payload: loginData.data });

      const {
        userLogin: { userInfo },
      } = getState();

      const configRequests = {
        headers: {
          "Content-type": "application/json",
          Authorization: `token ${userInfo.token}`,
        },
      };

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

      const syncedDataBackend = await axios.post(
        "/api/sync_user_requests/",
        submitData,
        configRequests
      );
    } catch (error) {
      console.log(error, "error from action");

      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data
            ? Object.values(error.response.data)
            : error.message,
      });
    }
  };
