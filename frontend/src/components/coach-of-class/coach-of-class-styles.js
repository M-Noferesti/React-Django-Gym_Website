import styled from "styled-components";

const background_color = "rgb(27, 27, 27)";

export const CoachOfClassContainer = styled.div`
  margin: 2em auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 460px;
  .coach-info {
    background-color: ${background_color};
    border: 2px;
    border-color: red;
    border-style: solid;
  }

  .coach-header {
    margin-bottom: 1em;
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      font-size: 35px;
      color: red;
      margin-bottom: 15px;
    }

    h5 {
      color: red;
      margin-bottom: 2em;
    }

    h4 {
      direction: rtl;
      color: red;
      font-size: 20px;
    }
  }

  .coach-social {
    display: flex;
    justify-content: space-around;
    margin-top: 1.7em;
    margin-bottom: 1em;

    svg {
      font-size: larger;
      color: white;
      &:hover {
        color: red;
      }
    }
  }

  .coach-image {
    background-color: #161414;
    border: 2px;
    border-color: red;
    border-style: solid;
    height: 100%;
    img {
      width: 100%;
      max-height: 100%;
    }
  }
`;
