import {
  CONTACT_REQUEST,
  CONTACT_REQUEST_SUCCESS,
  CONTACT_REQUEST_FAIL,
} from "./contact-constants";

const contactReducers = (state = { contact: [] }, action) => {
  switch (action.type) {
    case CONTACT_REQUEST:
      return { loading: true, contact: [] };

    case CONTACT_REQUEST_SUCCESS:
      return { loading: false, contact: action.payload };

    case CONTACT_REQUEST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export default contactReducers;
