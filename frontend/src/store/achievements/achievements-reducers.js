import {
  GET_ACHIEVEMENTS_FAIL,
  GET_ACHIEVEMENTS_REQUEST,
  GET_ACHIEVEMENTS_SUCCESS,
} from "./achievements-constants";

export const achievementsReducers = (state = { achievements: [] }, action) => {
  switch (action.type) {
    case GET_ACHIEVEMENTS_REQUEST:
      return { loading: true, ...state };

    case GET_ACHIEVEMENTS_SUCCESS:
      return { loading: false, achievements: action.payload };

    case GET_ACHIEVEMENTS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
