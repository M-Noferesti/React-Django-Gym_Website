import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AboutUsContainer } from "./about-us-styles";

function AboutUsItem({ icon, title, description }) {
  return (
    <AboutUsContainer className="col-md">
      <div>
        <FontAwesomeIcon icon={icon} />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </AboutUsContainer>
  );
}

export default AboutUsItem;
