import axios from "axios";
import {
  ENROLL_ATTENDING_CLASS,
  DISENROLL_ATTENDING_CLASS,
  SET_PERIOD_ATTENDING_CLASS,
} from "./constants";

export const enrollAction = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/classes/attending-classes/${id}`);
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    if (userInfo != null) {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `token ${userInfo.token}`,
        },
      };

      await axios.post(
        `/api/attending_classes_requests/update`,
        { id: id },
        config
      );
    }
  } catch (error) {}
  dispatch({
    type: ENROLL_ATTENDING_CLASS,
    payload: {
      attending_class: {
        id: data.id,
        title: data.title,
        description: data.description,
        monthly_fee: data.monthly_fee,
        image: data.image,
      },
      period: 1,
      price: data.monthly_fee,
    },
  });
  localStorage.setItem(
    "requestedClasses",
    JSON.stringify(getState().requestedClasses)
  );
};

export const setPeriodAction = (id, period) => async (dispatch, getState) => {
  dispatch({
    type: SET_PERIOD_ATTENDING_CLASS,
    payload: {
      id: id,
      period: period,
    },
  });
  localStorage.setItem(
    "requestedClasses",
    JSON.stringify(getState().requestedClasses)
  );

  try {
    const {
      userLogin: { userInfo },
    } = getState();

    if (userInfo != null) {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `token ${userInfo.token}`,
        },
      };
      if (period > 0)
        await axios.patch(
          `/api/attending_classes_requests/update/${id}`,
          { period: period },
          config
        );
      else
        await axios.delete(
          `/api/attending_classes_requests/update/${id}`,
          config
        );
    }
  } catch (error) {}
};

export const disenrollAction = (id) => async (dispatch, getState) => {
  dispatch({
    type: DISENROLL_ATTENDING_CLASS,
    payload: {
      id: id,
    },
  });

  localStorage.setItem(
    "requestedClasses",
    JSON.stringify(getState().requestedClasses)
  );
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    if (userInfo != null) {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `token ${userInfo.token}`,
        },
      };

      await axios.delete(
        `/api/attending_classes_requests/update/${id}`,
        config
      );
    }
  } catch (error) {}
};
