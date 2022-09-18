import {
  GET_ENROLLED_ATTENDING_CLASSES,
  GET_ENROLLED_ONLINE_CLASSES,
  GET_ENROLLED_ONLINE_CLASSES_FAIL,
  GET_ENROLLED_ATTENDING_CLASSES_FAIL,
  RESET_ENROLLED_CLASSES,
} from "./constants";

export const enrolledClassesReducers = (
  state = {
    attending_classes: [],
    online_classes: [],
  },
  action
) => {
  const attending_classes = state.attending_classes;
  const online_classes = state.online_classes;
  const item = action.payload;
  switch (action.type) {
    case GET_ENROLLED_ATTENDING_CLASSES:
      return {
        attending_classes: item,
        online_classes: [...online_classes],
      };

    case GET_ENROLLED_ONLINE_CLASSES:
      return {
        attending_classes: [...attending_classes],
        online_classes: item,
      };

    case GET_ENROLLED_ONLINE_CLASSES_FAIL:
      return { enrolled_online_classes_error: item };

    case GET_ENROLLED_ATTENDING_CLASSES_FAIL:
      return { enrolled_attending_classes_error: item };

    case RESET_ENROLLED_CLASSES:
      console.log("im trigged");
      return {
        attending_classes: [],
        online_classes: [],
      };

    default:
      return state;
  }
};
