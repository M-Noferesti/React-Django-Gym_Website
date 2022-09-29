import axios from "axios";
import {
  GET_ACHIEVEMENTS_FAIL,
  GET_ACHIEVEMENTS_REQUEST,
  GET_ACHIEVEMENTS_SUCCESS,
} from "./achievements-constants";
export const achievemetnsActions = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ACHIEVEMENTS_REQUEST });
    const { data } = await axios.get("/api/achievements/");
    dispatch({ type: GET_ACHIEVEMENTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ACHIEVEMENTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
