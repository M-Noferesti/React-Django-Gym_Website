import {
  RENEWAL_ATTENDING_CLASS_SUCCESS,
  RENEWAL_ATTENDING_CLASS_FAIL,
  RENEWAL_ONLINE_CLASS_SUCCESS,
  RENEWAL_ONLINE_CLASS_FAIL,
} from "./constants";

export const renewalClassesReducers = (state = {}, action) => {
  switch (action.type) {
    case RENEWAL_ATTENDING_CLASS_SUCCESS:
      return { success: true, id: action.payload.id };

    case RENEWAL_ATTENDING_CLASS_FAIL:
      return { error: action.payload.error, id: action.payload.id };

    case RENEWAL_ONLINE_CLASS_SUCCESS:
      return { success: true, id: action.payload.id };

    case RENEWAL_ONLINE_CLASS_FAIL:
      return { error: action.payload.error, id: action.payload.id };

    default:
      return state;
  }
};
