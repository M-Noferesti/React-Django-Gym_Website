import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import Message from "./../message/message";
import Spinner from "../spinner/spinner";
import { userRegisterActions } from "./../../store/user-register/user-register-actions";
import {
  faEnvelope,
  faUserTag,
  faKey,
} from "@fortawesome/free-solid-svg-icons";

function RegisterForm() {
  const errors = {
    "A user with that username already exists.":
      "this username already exists.",
    "password must be at least 5 character.":
      "your password must be at least 5 character.",
  };
  const userRegisterSelector = useSelector((state) => state.userRegister);

  const { loading, error, success } = userRegisterSelector;

  const dispatch = useDispatch();

  const submitFormHandler = (e) => {
    e.preventDefault();
    const username = e.target.querySelector("input[name='username']").value;
    const email = e.target.querySelector("input[name='email']").value;
    const password = e.target.querySelector("input[name='password']").value;
    const passwordConfirm = e.target.querySelector(
      "input[name='passwordConfirm']"
    ).value;

    dispatch(userRegisterActions(username, email, password, passwordConfirm));
  };
  return (
    <form id="register-form" onSubmit={(e) => submitFormHandler(e)}>
      {error
        ? error.map((x) =>
            errors[String(x)] ? (
              <Message type="fail" text={errors[String(x)]} />
            ) : (
              <Message type="fail" text={x} />
            )
          )
        : null}

      {success ? (
        <Message type="success" text={`. ثبت نام شما با موفقیت انجام شد `} />
      ) : null}
      {loading ? <Spinner /> : null}

      <label htmlFor="username">نام کاربری :</label>
      <div className="input">
        <span>
          <FontAwesomeIcon icon={faUserTag} />
        </span>
        <input type="text" name="username" />
      </div>

      <label htmlFor="email">ایمیل :</label>
      <div className="input">
        <span>
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
        <input type="email" name="email" />
      </div>

      <label htmlFor="password">رمز عبور :</label>
      <div className="input">
        <span>
          <FontAwesomeIcon icon={faKey} />
        </span>
        <input type="password" name="password" />
      </div>

      <label htmlFor="passwordConfirm"> تایید رمز عبور :</label>
      <div className="input">
        <span>
          <FontAwesomeIcon icon={faKey} />
        </span>
        <input type="password" name="passwordConfirm" />
      </div>

      <input type="submit" value="ثبت نام" />
    </form>
  );
}

export default RegisterForm;
