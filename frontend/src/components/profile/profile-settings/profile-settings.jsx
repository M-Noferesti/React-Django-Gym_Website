import React, { useEffect, useState, useRef, useMemo } from "react";
import Message from "../../message/message";
import Spinner from "../../spinner/spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProfileSettingsContainer } from "./profile-settings-styles";
import { useDispatch, useSelector } from "react-redux";
import { userDetailsActions } from "../../../store/user-details/user-details-actions";
import { userDetailsUpdateActions } from "../../../store/user-details-update/actions";
import {
  faEnvelope,
  faUserTag,
  faKey,
} from "@fortawesome/free-solid-svg-icons";

function ProfileSettings() {
  const dispatch = useDispatch();
  const userDetailsSelector = useSelector((state) => state.userDetails);
  const userDetailsUpdateSelector = useSelector(
    (state) => state.userDetailsUpdate
  );

  const { loading_set, error_from_set, success } = userDetailsUpdateSelector;
  const { loading_get, error_from_get, user } = userDetailsSelector;

  useEffect(() => {
    dispatch(userDetailsActions());
  }, [dispatch]);
  const submitFormHandler = (e) => {
    e.preventDefault();
    const data = Array.from(e.target.elements);
    const newData = { user: {} };

    data.map((x) =>
      x.name !== ""
        ? (x.name == "username") | (x.name == "email")
          ? (newData["user"][x.name] = x.value)
          : (newData[x.name] = x.value)
        : null
    );

    dispatch(userDetailsUpdateActions(newData));
  };

  return (
    <ProfileSettingsContainer>
      {loading_get ? (
        <Spinner />
      ) : (
        <form onSubmit={(e) => submitFormHandler(e)}>
          {error_from_set
            ? error_from_set.map((x) => <Message type="fail" text={x} />)
            : null}
          {success ? (
            <Message type="success" text="تغییرات با موفقیت انجام شد" />
          ) : null}
          {loading_set ? <Spinner /> : null}

          <label htmlFor="username">نام کاربری :</label>
          <div className="input">
            <span>
              <FontAwesomeIcon icon={faUserTag} />
            </span>
            <input
              type="text"
              name="username"
              defaultValue={
                user.user != undefined ? user.user["username"] : null
              }
            />
          </div>

          <label htmlFor="email">ایمیل:</label>
          <div className="input">
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input
              type="email"
              name="email"
              defaultValue={user.user != undefined ? user.user["email"] : null}
            />
          </div>

          <label htmlFor="old_password">رمز عبور قبلی :</label>
          <div className="input">
            <span>
              <FontAwesomeIcon icon={faKey} />
            </span>
            <input type="password" name="old_password" />
          </div>

          <label htmlFor="new_password">رمز عبور جدید :</label>
          <div className="input">
            <span>
              <FontAwesomeIcon icon={faKey} />
            </span>
            <input type="password" name="new_password" />
          </div>

          <label htmlFor="confirm_new_password">تایید رمز عبور جدید :</label>
          <div className="input">
            <span>
              <FontAwesomeIcon icon={faKey} />
            </span>
            <input type="password" name="confirm_new_password" />
          </div>

          <input type="submit" value="ذخیره" />
        </form>
      )}
    </ProfileSettingsContainer>
  );
}

export default ProfileSettings;
