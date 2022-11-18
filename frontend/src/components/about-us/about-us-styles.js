import styled from "styled-components";

export const AboutUsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px 0;
  text-align: center;
  div {
    background: red;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    color: white;
    font-size: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
  }

  h4 {
    margin: 5px 0;
    color: red;
    font-size: calc(1vw + 8px);
  }

  p {
    margin: 5px 0;
    color: white;
    padding: 0 15px;
  }
`;
