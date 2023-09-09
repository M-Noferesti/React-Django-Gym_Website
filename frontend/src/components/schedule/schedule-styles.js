import styled from "styled-components";

const background_color = "rgb(27, 27, 27)";

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px;
  white-space: nowrap;
  direction: rtl;

  button {
    background-color: red;
    outline: none;
    cursor: pointer;
    width: 100px;
    font-weight: bolder;
    border: none;
    margin: 1px;
    direction: rtl;
  }

  button:hover {
    background-color: ${background_color};
    color: white;
  }
  button.active {
    background-color: ${background_color};
    color: white;
  }
`;

export const ScheduleContainer = styled.div`
  padding: 6px 12px;

  .schedule {
    background-color: ${background_color};
    display: flex;
    direction: rtl;
    justify-content: space-between;
    align-items: center;
    margin: 5px auto;
    border-radius: 20px;
    width: 70%;
    border: solid red 2px;

    img {
      width: calc(20px + 4vw);
    }

    h5 {
      font-size: calc(5px + 1vw);
      margin: 0;
    }

    &:nth-of-type(1) {
      animation-name: time;
      animation-duration: 0.6s;
    }

    &:nth-of-type(2) {
      animation-name: time;
      animation-duration: 0.7s;
    }

    &:nth-of-type(3) {
      animation-name: time;
      animation-duration: 0.8s;
    }

    &:nth-of-type(4) {
      animation-name: time;
      animation-duration: 0.9s;
    }

    &:nth-of-type(5) {
      animation-name: time;
      animation-duration: 1s;
    }

    &:nth-of-type(6) {
      animation-name: time;
      animation-duration: 1.1s;
    }

    &:nth-of-type(7) {
      animation-name: time;
      animation-duration: 1.2s;
    }
  }

  @keyframes time {
    from {
      opacity: 0;
      transform: translateY(80px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
