import {
  GALLERY_REQUEST,
  GALLERY_REQUEST_SUCCESS,
  GALLERY_REQUEST_FAIL,
} from "./gallery-constants";

import axios from "axios";

export const galleryAction =
  (page, tag = "all") =>
  async (dispatch) => {
    try {
      dispatch({ type: GALLERY_REQUEST });
      const { data } = await axios.get(`/api/gallery/?page=${page}&tag=${tag}`);
      dispatch({ type: GALLERY_REQUEST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GALLERY_REQUEST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
