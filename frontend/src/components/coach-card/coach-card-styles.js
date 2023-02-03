import styled, { keyframes } from "styled-components";

const background_color = "rgb(27, 27, 27)";
const open = keyframes`
    from {
        transform: scale(0);
        display:'none';
    }
    to {
        transform: scale(1);
        display:'flex';
    }
  `;

const close = keyframes`
from {
    transform: scale(1);
    display:'flex';
}
to {
    transform: scale(0);
     display:'none';
}
`;
export const CoachCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  width: 300px;
  background-color: ${background_color};
  border-radius: 10px;
  position: relative;
  img {
    border-radius: 50%;
    width: calc(100px + 1vw);
    height: calc(100px + 1vw);
    border: red solid 3px;
  }
  .name {
    color: white;
    font-weight: bolder;
    margin: 10px 0;
  }
  .coach-info {
    color: white;
    position: relative;
  }

  .resume {
    color: red;
    margin: 10px 0;
  }

  .social-pages {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 10px;
    a {
      color: red;
    }
  }
  .open {
    animation: ${open} 1s;
  }
  .close {
    animation: ${close} 1s;
  }
  .classes {
    position: absolute;
    /* display: ${(props) => (props.toggle ? "flex" : "none")}; */
    display: flex;
    visibility: ${(props) => (props.toggle ? "visible" : "hidden")};
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: red;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    transition: all 1s;

    span {
      color: white;
    }
  }
  .button {
    position: absolute;
    background-color: ${(props) => (props.toggle ? "rgb(27, 27, 27)" : "red")};
    border-top-left-radius: 120px;
    border-bottom-left-radius: 120px;
    color: ${(props) => (props.toggle ? "red" : "white")};
    padding: 5px 10px;
    right: 0;
    top: 0px;
    border: none;
    font-weight: bolder;
    cursor: pointer;
    font-size: large;
    z-index: 9999;
  }
`;
