import styled from "styled-components";

export const ScrollContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  font-size: 30px;
  background-color: #ff1919;
  position: fixed;
  bottom: 30px;
  right: 32px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  cursor: pointer !important;
  opacity: 0;
  z-index: 9999;

  ${({ show }) =>
    show &&
    `
  opacity: 1;
  transform: translateY(-55px);`}

  svg {
    color: rgb(27, 27, 27);
  }
  &:hover svg {
    color: white;
  }
`;
