import axios from "axios";

export const checkTokenValidationMiddleware = (store) => (next) => (action) => {
  if (localStorage.getItem("userInfo"))
    if (JSON.parse(localStorage.getItem("userInfo")).token) {
      const {
        userLogin: { userInfo },
      } = store.getState();

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `token ${
            JSON.parse(localStorage.getItem("userInfo")).token
          }`,
        },
      };

      axios.get("/api/accounts/profile/", config).catch(() => {
        localStorage.removeItem("userInfo");
        localStorage.removeItem("requestedClasses");
        store.dispatch({ type: "USER_LOGOUT" });
        store.dispatch({ type: "USER_DETAILS_RESET" });
      });
    }
  next(action);
};
