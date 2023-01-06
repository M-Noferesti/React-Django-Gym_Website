import React from "react";
import { AboutClassContainer } from "./about-us-styles";

function AboutClass({ title, description }) {
  return (
    <AboutClassContainer>
      <h1>{title}</h1>
      <p>{description}</p>
    </AboutClassContainer>
  );
}

export default AboutClass;
