import React from "react";
import { NavbarContainer } from "./navbar-styles";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="items">
        <div className="avatar">
          <img src="" alt="" />
        </div>
        <div className="item">
          <LogoutIcon />
          logout
        </div>
        <div className="item">
          <DarkModeIcon />
          dark mode
        </div>
        <div className="item">
          <NotificationsIcon />
          notfications
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
