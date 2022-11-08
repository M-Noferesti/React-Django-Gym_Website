import styled, { keyframes } from "styled-components";

const open = keyframes`
    from {
      transform: translate(-50%, -50%) scale(0.7);
    }
    to {
      transform: translate(-50%, -50%) scale(1);
    }
  `;

const close = keyframes`
from {
  transform: translate(-50%, -50%) opacity(1);
}
to {
  transform: translate(-50%, -50%) opacity(0);
}
`;
export const Formcontainer = styled.div`
  text-align: right;
  width: 100%;
  min-height: 100%;
  border-radius: 10px;
  position: absolute;
  z-index: 999999;
  background-color: rgba(0, 0, 0, 0.6);
  margin: 0;
  visibility: ${(props) => (props.clicked ? "hidden" : "show")};
  opacity: ${(props) => (props.clicked ? 0 : 1)};
  transition: all 0.4s ease;
  .forms {
    width: 40%;
    position: fixed !important;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
  }
  .open {
    animation: ${open} 0.4s !important;
  }
  .close {
    animation: ${close} 0.4s !important;
  }

  .form-tabs {
    margin: 0;
    .close-form {
      float: left;
      background-color: red;
      /* border-top-left-radius: 3px;
      border-top-right-radius: 3px; */
      border-radius: 50%;
      color: white;
      height: 100%;
      padding: 5px 10px;
    }
    button {
      padding: 10px;
      font-size: 15px;
      color: white;
      cursor: pointer;
      border: none !important;
      outline: none !important;
      &:nth-of-type(1) {
        background-color: ${(props) =>
          props.formSelect === "login" ? "red" : "rgb(27,27,27)"};
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
      }

      &:nth-of-type(2) {
        background-color: ${(props) =>
          props.formSelect === "register" ? "red" : "rgb(27,27,27)"};
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
      }
    }
  }
  form {
    padding: 10px;
    direction: rtl;
    background-color: rgb(27, 27, 27);
  }

  #register-form {
    display: ${(props) => (props.formSelect === "register" ? "block" : "none")};
  }

  #login-form {
    display: ${(props) => (props.formSelect === "login" ? "block" : "none")};
  }

  .input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;
    margin: 10px 0;
    input {
      width: 85%;
      border: none;
      height: 30px;
    }

    span {
      height: 30px;
      width: 50px;
      background-color: rgb(255, 25, 25);
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        color: white;

        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;

        width: 20px;
        height: 20px;
      }
    }
  }

  label {
    color: white;
    margin: 0;
    margin-top: 8px;
    margin-bottom: 5px;
  }

  input[type="submit"] {
    background-color: rgb(255, 25, 25);
    width: 50%;
    color: white;
    text-align: center;
    display: block;
    margin: 0 auto;
    margin-top: 15px;
    font-size: 20px;
    padding: 3px;
    border: none;
    border-radius: 5px;

    &:focus,
    &:active {
      outline: none;
    }
  }

  /* .form-header {
      background-color: rgb(255, 25, 25);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      font-size: calc(20px + 0.5vw);
      padding-left: 45px;
      font-weight: bolder;
      margin-bottom: 10px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;

      svg {
        color: rgb(27, 27, 27);
        font-size: 35px;
        margin: 0 15px;
      }
    } */

  .brand {
    img {
      width: 100%;
    }

    color: rgb(255, 25, 25);
    text-align: center;
    display: block;
    width: 200px;
    margin: 0 auto;

    &:hover {
      text-decoration: none;
      color: black;
    }
  }

  .redirect-link {
    color: white;
    display: flex;
    justify-content: center;
    margin: 7px;
    font-size: calc(12px + 0.5vw);

    a {
      color: rgb(255, 25, 25);
      margin-right: 3px;
    }
  }

  @media (max-width: 955px) {
    .forms {
      width: 70%;
    }
  }

  @media (max-width: 555px) {
    .forms {
      width: 80%;
    }
  }

  @media (max-width: 455px) {
    .forms {
      width: 95%;
    }
  }
`;
