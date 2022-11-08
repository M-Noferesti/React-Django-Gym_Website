import React, { useState, useEffect, useRef } from "react";
import { Formcontainer } from "./login-register-form-styles";

import LoginForm from "./login-form";
import RegisterForm from "./register-form";

function LoginRegisterForm({ showForms, setShowForms, handleShowForm }) {
  const [formSelect, setFormSelect] = useState("login");

  const popupRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (!popupRef.current.contains(event.target)) {
        setShowForms(true);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleNavClick = (x) => {
    setFormSelect(x);
  };

  return (
    <Formcontainer formSelect={formSelect} clicked={showForms}>
      <div className={!showForms ? "forms open" : "forms close"} ref={popupRef}>
        <div className="form-tabs">
          <button onClick={() => handleNavClick("login")}>ورود</button>
          <button onClick={() => handleNavClick("register")}>ثبت نام</button>
          <button className="close-form" onClick={handleShowForm}>
            &#10005;
          </button>
        </div>
        <RegisterForm />
        <LoginForm />
      </div>
    </Formcontainer>
  );
}

export default LoginRegisterForm;
