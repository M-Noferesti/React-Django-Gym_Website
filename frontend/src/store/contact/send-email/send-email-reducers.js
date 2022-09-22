import { SEND_EMAIL_SUCCESS, SEND_EMAIL_FAIL } from "./send-email-constants";

const sendEmailReducers = (state = {}, action) => {
  switch (action.type) {
    case SEND_EMAIL_SUCCESS:
      return { success: true };

    case SEND_EMAIL_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};

export default sendEmailReducers;
