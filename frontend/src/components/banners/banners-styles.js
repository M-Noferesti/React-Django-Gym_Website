import styled from "styled-components";

export const BannerContainer = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  z-index: 1;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    z-index: -2;
  }
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h1 {
      font-size: calc(5vw + 20px);
      color: white;
      text-align: center;
      white-space: nowrap;
    }
    .page-address {
      margin-top: 2em;
      text-align: right;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row-reverse;
      a {
        padding: 3px;
        font-size: calc(0.5vw + 11px);
        color: white;
        text-decoration: none;
        font-weight: bold;

        &:hover {
          color: red;
        }
      }
      svg {
        color: red;
        margin: 0 10px;
      }
    }
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 500px;
    width: 100%;
    background: radial-gradient(
      ellipse at center,
      rgba(181, 8, 8, 0.38) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
    background-size: 100% 100%;
    z-index: -1;
  }

  @media (max-width: 768px) {
    height: 400px;

    &::after {
      height: 400px;
    }
  }

  @media (max-width: 400px) {
    height: 300px;

    &::after {
      height: 300px;
    }
  }

  @media (max-width: 300px) {
    height: 200px;

    &::after {
      height: 200px;
    }
  }
`;
