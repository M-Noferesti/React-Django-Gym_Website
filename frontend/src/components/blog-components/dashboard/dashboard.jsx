import React from "react";
import SideBar from "./../sidebar/sidebar";
import { DashboardContainer } from "./dashbord-styles";
import Navbar from "./../navbar/navbar";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <SideBar />
      <div className="container">
        <Navbar />
        container
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
