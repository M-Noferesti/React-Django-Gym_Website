import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "./../message/message";
import { userLoginActions } from "./../../store/user-login/user-login-actions";
import { faUserTag, faKey } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spinner from "../spinner/spinner";
import { enrolledOnlineClassesAction } from "../../store/enrolment/enrolled_classes/action";
import { enrolledAttendingClassesAction } from "./../../store/enrolment/enrolled_classes/action";

function LoginForm() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();
  const userInfoSelector = useSelector((state) => state.userLogin);
  const { loading, error, success, userInfo } = userInfoSelector;

  const usernameHandler = (username) => {
    setUsername(username);
  };

  const passwordHandler = (password) => {
    setPassword(password);
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    await dispatch(userLoginActions(username, password));
    dispatch(enrolledOnlineClassesAction());
    dispatch(enrolledAttendingClassesAction());
    e.target.querySelector("input[name='password']").value = "";
  };

  return (
    <form id="login-form" onSubmit={(e) => submitFormHandler(e)}>
      {error ? <Message type="fail" text={error} /> : null}
      {success ? (
        <Message
          type="success"
          text={`.ورود شما با موفقیت انجام شد ${userInfo.username}`}
        />
      ) : null}
      {loading ? <Spinner /> : null}
      <label htmlFor="username">نام کاربری :</label>
      <div className="input">
        <span>
          <FontAwesomeIcon icon={faUserTag} />
        </span>
        <input
          type="text"
          name="username"
          onChange={(e) => usernameHandler(e.target.value)}
        />
      </div>

      <label htmlFor="password">رمز عبور :</label>
      <div className="input">
        <span>
          <FontAwesomeIcon icon={faKey} />
        </span>
        <input
          type="password"
          name="password"
          onChange={(e) => passwordHandler(e.target.value)}
        />
      </div>

      <input type="submit" value="ورود" />
    </form>
  );
}

export default LoginForm;
