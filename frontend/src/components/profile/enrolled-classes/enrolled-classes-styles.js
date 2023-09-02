import styled from "styled-components";

const background_color = "rgb(27, 27, 27)";

export const EnrolledClassesContianer = styled.div`
  display: grid;
  grid-template-columns: 250px 250px 250px 250px;
  grid-gap: 20px;
  direction: rtl;
  width: 100%;
  justify-content: center;
  margin: 20px 0;
  .class {
    height: 100%;
    width: 100%;
    background-color: ${background_color};
    display: flex;
    flex-direction: column;
    box-shadow: 3px 3px 5px ${background_color};

    img {
      width: 100%;
      height: 100%;
    }
    .details {
      display: flex;
      a,
      span {
        background-color: red;
        color: white;

        border: none;
        width: 100%;
        text-align: center;
        padding: 5px;
        direction: rtl;
        font-size: calc(6px + 0.5vw);
        svg {
          font-size: calc(6px + 0.5vw);
        }
      }

      span {
        border-right: solid 2px ${background_color};
        cursor: default;
      }

      a {
        text-decoration: none;
        &:hover {
          background-color: white;
          color: black;
        }
      }
    }
  }

  @media (max-width: 1180px) {
    grid-template-columns: 250px 250px 250px;
  }

  @media (max-width: 500px) {
    grid-template-columns: 250px 250px;
  }

  @media (max-width: 360px) {
    grid-template-columns: 250px;
  }

  @media (max-width: 1210px) {
    .class .details span,
    .class .details a {
      font-size: calc(5px + 0.5vw);
      svg {
        font-size: calc(5px + 0.5vw);
      }
    }
  }
`;
