import React, { useState, useEffect } from "react";
import { ContactFormContainer } from "./contact-form-styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useDispatch, useSelector } from "react-redux";

import { sendEmailAction } from "./../../store/contact/send-email/send-email-actions";

import Message from "./../message/message";
import {
  faUser,
  faEnvelope,
  faCommentAlt,
} from "@fortawesome/free-solid-svg-icons";

const inputHeightHandler = (x) => {
  x.target.style.height = "auto";
  x.target.style.height = x.target.scrollHeight + "px";
};

function ContactForm() {
  const [name, setName] = useState();
  const [email, setEamil] = useState();
  const [message, setMessage] = useState();
  const { success, error } = useSelector((state) => state.sendEmail);

  const dispatch = useDispatch();

  const submitFormHandler = (e) => {
    e.preventDefault();
    const data = { name: name, email: email, message: message };
    dispatch(sendEmailAction(data));
  };

  useEffect(() => {}, [dispatch]);
  return (
    <ContactFormContainer>
      {success ? (
        <Message type="success" text="email sent successfuly" />
      ) : error ? (
        <Message type="fail" text={"fail to send email please try later "} />
      ) : null}

      <h4>ارسال پیام</h4>
      <p>نظرات، پیشنهادات و انتقادات خود را با ما در میان بگذارید</p>
      <div className="form">
        <form>
          <div className="inputs">
            <input
              type="text"
              placeholder="نام خود را وارد نمایید .."
              onChange={(e) => setName(e.target.value)}
            />
            <div className="append">
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>

          <div className="inputs">
            <input
              type="email"
              placeholder="ایمیل خود را وارد نمایید .."
              required
              onChange={(e) => setEamil(e.target.value)}
            />
            <div className="append">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </div>

          <div className="inputs">
            <textarea
              placeholder="پیامتان را بنویسید .."
              onInput={(x) => inputHeightHandler(x)}
              required
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="append">
              <FontAwesomeIcon icon={faCommentAlt} />
            </div>
          </div>

          <input
            type="submit"
            value="ارسال"
            onClick={(e) => submitFormHandler(e)}
          />
        </form>
      </div>
    </ContactFormContainer>
  );
}

export default ContactForm;
