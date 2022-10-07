import React, { useState, useRef, useEffect } from "react";
import { NavbarContainer } from "./navbar-styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faUser,
  faUserCircle,
  faSignOutAlt,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import LargeScreenItems from "./large-screen-items";
import SideBar from "./sidebar";
import { items } from "./data";
import LoginRegisterForm from "../login-register-form/login-register-form";
import logo from "../../static-images/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { userLogoutActions } from "../../store/user-login/user-login-actions";
import { Link } from "react-router-dom";

function NavBar() {
  const sidebarButton = useRef(null);
  const navbar = useRef(null);
  const [clicked, setClicked] = useState(false);
  const [showForms, setShowForms] = useState(true);
  const [navbarColor, setNavbarColor] = useState(false);
  const { userInfo } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const { requestedClasses } = useSelector((state) => state);
  const [requestClicked, setRequestClicked] = useState(false);
  const total_requests_calculator = () => {
    if (requestedClasses) {
      return (
        requestedClasses.attending_classes.length +
        requestedClasses.online_classes.length
      );
    } else return 0;
  };

  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleShowForm = () => {
    setShowForms(!showForms);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [navbar]);
  const handleScroll = () => {
    if (navbar.current !== null)
      if (window.scrollY > navbar.current.clientHeight + 300)
        setNavbarColor(true);
      else setNavbarColor(false);
  };
  return (
    <div>
      <NavbarContainer navbarColor={navbarColor} ref={navbar}>
        <div className="logo">
          <img src={logo} alt="logo" />
          <span>GYM NAME</span>
        </div>
        <LargeScreenItems items={items} />
        {userInfo === null || userInfo === undefined ? (
          <button onClick={() => setShowForms()} id="login-register">
            <div className="user">
              <span>ورود</span>
              <span>|</span>
              <span>ثبت نام</span>
              <FontAwesomeIcon icon={faUser} />
            </div>
          </button>
        ) : (
          <div>
            <button
              onClick={() => {
                dispatch(userLogoutActions());
              }}
            >
              <div className="user">
                <span>خروج</span>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </div>
            </button>

            <Link to="/profile">
              <div className="user">
                <span>پروفایل</span>
                <FontAwesomeIcon icon={faUserCircle} />
              </div>
            </Link>
          </div>
        )}

        <Link
          to="/requests"
          className="requested-classes"
          onClick={() => setRequestClicked(true)}
        >
          <FontAwesomeIcon icon={faClipboard} />
          <span>درخواست ها</span>
          <span>{total_requests_calculator()}</span>
        </Link>

        <div
          className="menu-button"
          onClick={() => handleClick()}
          ref={sidebarButton}
        >
          <FontAwesomeIcon icon={!clicked ? faBars : faTimes} />
        </div>
      </NavbarContainer>
      <SideBar
        items={items}
        clicked={clicked}
        setClicked={setClicked}
        sidebarButton={sidebarButton}
      />

      <LoginRegisterForm
        showForms={showForms}
        setShowForms={setShowForms}
        handleShowForm={handleShowForm}
      />
    </div>
  );
}

export default NavBar;
