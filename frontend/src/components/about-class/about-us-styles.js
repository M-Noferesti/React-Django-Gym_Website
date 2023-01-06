import styled from "styled-components";

const background_color = "rgb(27, 27, 27)";

export const AboutClassContainer = styled.div`
  text-align: justify;
  line-height: 2.5em;
  direction: rtl;
  background-color: ${background_color};
  padding: 10px;
  border: solid 2px red;
  width: 66%;
  font-size: calc(4px + 1vw);
  margin: 2em auto;
  color: white;

  h1 {
    color: red;
  }
`;
