import React from "react";
import { SidebarContainer } from "./sidebar-styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

const SideBar = () => {
  return (
    <SidebarContainer>
      <div className="top">top</div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <DashboardIcon className="icon" />
            <span>dashboard</span>
          </li>
          <li>
            <PeopleAltIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <FitnessCenterIcon className="icon" />
            <span>Classes</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="color-option"></div>
        <div className="color-option"></div>
      </div>
    </SidebarContainer>
  );
};

export default SideBar;
