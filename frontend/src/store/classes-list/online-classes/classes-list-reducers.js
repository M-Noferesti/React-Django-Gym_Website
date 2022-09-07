import {
  GET_PUBLIC_ONLINE_CLASSES_LIST_REQUEST,
  GET_PUBLIC_ONLINE_CLASSES_LIST_REQUEST_SUCCESS,
  GET_PUBLIC_ONLINE_CLASSES_LIST_REQUEST_FAIL,
  GET_PRIVATE_ONLINE_CLASSES_LIST_REQUEST,
  GET_PRIVATE_ONLINE_CLASSES_LIST_REQUEST_SUCCESS,
  GET_PRIVATE_ONLINE_CLASSES_LIST_REQUEST_FAIL,
} from "./classes-list-constants";

const onlineClassesListReducers = (
  state = {
    online_classes: {
      private_online_classes: [],
      public_online_classes: [],
    },
  },
  action
) => {
  switch (action.type) {
    case GET_PRIVATE_ONLINE_CLASSES_LIST_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case GET_PRIVATE_ONLINE_CLASSES_LIST_REQUEST_SUCCESS:
      const current_public_classes = state.online_classes.public_online_classes;
      return {
        loading: false,
        online_classes: {
          public_online_classes: [...current_public_classes],
          private_online_classes: action.payload,
        },
      };

    case GET_PRIVATE_ONLINE_CLASSES_LIST_REQUEST_FAIL:
      return { ...state, loading: false, error: action.payload };

    case GET_PUBLIC_ONLINE_CLASSES_LIST_REQUEST:
      return {
        loading_public: true,
        ...state,
      };

    case GET_PUBLIC_ONLINE_CLASSES_LIST_REQUEST_SUCCESS:
      const current_private_classes =
        state.online_classes.private_online_classes;
      return {
        loading_public: false,
        online_classes: {
          private_online_classes: [...current_private_classes],
          public_online_classes: action.payload,
        },
      };

    case GET_PUBLIC_ONLINE_CLASSES_LIST_REQUEST_FAIL:
      return {
        ...state,
        loading_public: false,
        error_public: action.payload,
      };

    default:
      return state;
  }
};

export default onlineClassesListReducers;
