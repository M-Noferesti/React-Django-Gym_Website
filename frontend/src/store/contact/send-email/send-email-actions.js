import { SEND_EMAIL_SUCCESS, SEND_EMAIL_FAIL } from "./send-email-constants";

import axios from "axios";

const configLogin = {
  headers: {
    "Content-type": "application/json",
  },
};

export const sendEmailAction = (data) => async (dispatch) => {
  try {
    await axios.post("/api/contact/send-email", data, configLogin);
    dispatch({ type: SEND_EMAIL_SUCCESS });
  } catch (error) {
    dispatch({
      type: SEND_EMAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
