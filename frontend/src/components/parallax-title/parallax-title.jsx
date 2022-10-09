import React from "react";
import { ParallaxTitleContainer } from "./parallax-title-styles";

function ParallaxTitle({ title, image }) {
  return (
    <ParallaxTitleContainer image={image}>
      <span>{title}</span>
    </ParallaxTitleContainer>
  );
}

export default ParallaxTitle;
