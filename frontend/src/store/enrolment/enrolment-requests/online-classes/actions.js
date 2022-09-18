import axios from "axios";
import {
  ENROLL_ONLINE_CLASS,
  DISENROLL_ONLINE_CLASS,
  SET_PERIOD_ONLINE_CLASS,
} from "./constants";

export const enrollAction = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/classes/private-online-classes/${id}`);
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
        `/api/online_classes_requests/update`,
        { id: id },
        config
      );
    }
  } catch (error) {}
  dispatch({
    type: ENROLL_ONLINE_CLASS,
    payload: {
      online_class: {
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
    type: SET_PERIOD_ONLINE_CLASS,
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
          `/api/online_classes_requests/update/${id}`,
          { period: period },
          config
        );
      else
        await axios.delete(`/api/online_classes_requests/update/${id}`, config);
    }
  } catch (error) {}
};

export const disenrollAction = (id) => async (dispatch, getState) => {
  dispatch({
    type: DISENROLL_ONLINE_CLASS,
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

      await axios.delete(`/api/online_classes_requests/update/${id}`, config);
    }
  } catch (error) {}
};
