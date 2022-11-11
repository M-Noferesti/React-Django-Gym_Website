import styled from "styled-components";

export const MessageContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  padding: 10px;
  border: ${(props) =>
    props.type === "fail" ? "solid 1px rgb(255,25,25)" : "solid 1px green"};

  span {
    display: block;
    width: 100%;
    color: ${(props) => (props.type === "fail" ? "rgb(255,25,25)" : "green")};
    text-align: center;
    direction: ltr;
  }
`;
