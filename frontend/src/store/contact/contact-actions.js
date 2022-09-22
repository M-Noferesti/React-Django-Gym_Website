import {
  CONTACT_REQUEST,
  CONTACT_REQUEST_SUCCESS,
  CONTACT_REQUEST_FAIL,
} from "./contact-constants";

import axios from "axios";

const configLogin = {
  headers: {
    "Content-type": "application/json",
  },
};

export const contactAction = () => async (dispatch) => {
  try {
    dispatch({ type: CONTACT_REQUEST });
    const { data } = await axios.get(`/api/contact/`);
    dispatch({ type: CONTACT_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CONTACT_REQUEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
