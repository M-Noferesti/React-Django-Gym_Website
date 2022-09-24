import {
  GALLERY_REQUEST,
  GALLERY_REQUEST_SUCCESS,
  GALLERY_REQUEST_FAIL,
} from "./gallery-constants";

const galleryReducers = (state = { gallery: [] }, action) => {
  switch (action.type) {
    case GALLERY_REQUEST:
      return { loading: true, gallery: [] };

    case GALLERY_REQUEST_SUCCESS:
      return { loading: false, gallery: action.payload };

    case GALLERY_REQUEST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export default galleryReducers;
