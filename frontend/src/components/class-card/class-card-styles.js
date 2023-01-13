import styled from "styled-components";

const background_color = "rgb(27, 27, 27)";

export const ClassCardContainer = styled.div`
  background-color: ${background_color};
  border-radius: 5px;
  width: 100%;

  transform: scale(0.9);
  &:hover {
    transform: scale(0.94);
    transition: 0.3s;
  }

  img {
    width: 100%;
    height: 200px;
    border-radius: 5px;
  }

  .card-header {
    width: 100%;
    text-align: center;
    margin: 20px 0;
    h1 {
      color: red;
      white-space: nowrap;
      font-size: calc(10px + 2vw);
      margin: 10px 0;
    }

    h5 {
      color: white;
      white-space: nowrap;
      font-size: calc(5px + 1vw);
      margin: 0;
    }
  }

  .operations {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 35px;

    & * {
      font-size: calc(0.5vw + 10px);
      line-height: 25px;
      text-align: center;
      font-weight: bold;
    }

    & svg {
      font-size: calc(0.5vw + 5px);
    }
    a,
    button {
      color: white;
      background-color: red;
      padding: 5px 2px;
      text-decoration: none;
      width: 100%;
      cursor: pointer;
      height: 100%;
      border: none;
      outline: none;
      &:hover {
        background-color: white;
        color: ${background_color};

        svg {
          color: ${background_color};
          margin: 0 3px;
        }
      }

      svg {
        color: white;
        margin: 0 5px;
      }
    }
    .cost {
      color: ${background_color};
      background-color: red;
      padding: 5px 2px;
      width: 100%;
      border-left: solid ${background_color} 2px;
      border-right: solid ${background_color} 2px;
      height: 100%;
      svg {
        color: ${background_color};
        margin: 0 3px;
      }
    }
  }
`;
