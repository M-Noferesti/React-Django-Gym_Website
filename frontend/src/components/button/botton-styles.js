import styled from "styled-components";
export const ButtonContainer = styled.div`
  margin: 10px 0;
  a {
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
      background: linear-gradient(
        to bottom,
        rgb(255, 25, 25),
        rgb(124, 18, 18)
      );
    }
  }
`;
