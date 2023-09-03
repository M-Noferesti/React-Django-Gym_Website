import styled from "styled-components";
import { grayColor, redishColor } from "./../../css-vars";

export const RequestedClassesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px 50px;

  .item {
    width: 70%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 20px;
    background-color: ${grayColor};
    border-radius: 10px;
    .info {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .title {
        color: ${redishColor};
        font-weight: bolder;
        font-size: 20px;
      }
      div {
        margin: 10px;
        direction: rtl;
        color: white;
      }
    }
    .actions {
      width: 50%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      svg {
        cursor: pointer;
        color: red;
      }
    }
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: 10px;
      border: solid 3px ${redishColor};
    }
  }
`;

export const ButtonContainer = styled.div`
  color: rgb(27, 27, 27);
  background-color: rgb(255, 25, 25);
  border: none;
  padding: 10px 10px;
  text-decoration: none !important;
  font-size: calc(7px + 0.5vw);
  font-weight: bolder;
  display: block;
  width: fit-content;
  border-radius: 50px;
  text-align: center;
  margin: 0 auto;
  cursor: pointer;
  &:hover {
    color: white;
    background: linear-gradient(to bottom, rgb(255, 25, 25), rgb(124, 18, 18));
  }
`;
