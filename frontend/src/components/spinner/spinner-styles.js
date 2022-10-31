import styled, { keyframes } from "styled-components";
const spin = keyframes`
   0% {
    transform: rotate(0deg);
  }

  100%{
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  margin: 50px auto;
  border: 16px solid rgb(27, 27, 27);
  border-radius: 50%;
  border-top: 16px solid rgb(255, 25, 25);
  border-bottom: 16px solid rgb(255, 25, 25);
  width: 120px;
  height: 120px;

  animation: ${spin} 2s linear infinite;
`;
