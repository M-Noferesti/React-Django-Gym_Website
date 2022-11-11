import React from "react";
import { MessageContainer } from "./message-styles";

function Message({ text, type }) {
  return (
    <MessageContainer type={type}>
      <span>{text}</span>
    </MessageContainer>
  );
}

export default Message;
