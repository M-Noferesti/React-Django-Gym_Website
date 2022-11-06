import React from "react";
import { ButtonContainer } from "./botton-styles";

function Button({ text, url }) {
  return (
    <ButtonContainer>
      <a href={url}>{text}</a>
    </ButtonContainer>
  );
}

export default Button;
