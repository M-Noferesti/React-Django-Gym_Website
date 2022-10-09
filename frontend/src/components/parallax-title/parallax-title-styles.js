import styled from "styled-components";
export const ParallaxTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ image }) => `url(${image}) no-repeat`};
  height: calc(120px + 5vw);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-top: 2em;
  span {
    color: rgb(246, 76, 76);
    font-size: calc(14px + 3vw);
    display: inline-block;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;
