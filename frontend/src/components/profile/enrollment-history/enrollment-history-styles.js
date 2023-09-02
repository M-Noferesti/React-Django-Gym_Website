import styled from "styled-components";

const background_color = "rgb(27, 27, 27)";
export const EnrollmentHistoryContainer = styled.div`
  direction: rtl;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .history-item {
    width: 100%;

    button {
      background-color: ${background_color};
      color: white;
      outline: none;
      border: solid 1px red;
      border-top: 0;
      cursor: pointer;
      width: 100%;
      padding: 0;
      transition: 0.3s;
      &:nth-of-type(1) {
        border-top: solid red 1px;
      }
      &:hover {
        background-color: red;
      }
      span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 15px;
      }

      svg {
        margin: 0 10px;
      }
    }
    .enrolled-classes-history {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
      .class {
        display: flex;
        justify-content: space-between;
        align-items: center;
        direction: rtl;
        background-color: ${background_color};
        border: 1px solid red;
        padding: 5px;
        img {
          width: 100px;
          height: 100px;
        }

        span {
          color: white;
        }
      }
    }
  }
`;
