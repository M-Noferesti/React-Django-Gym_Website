import styled from "styled-components";

export const ProfileSettingsContainer = styled.div`
  text-align: right;
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  form {
    width: 40%;
    padding: 10px;
    display: block;
    margin: 0 auto;
    direction: rtl;
    background-color: rgb(27, 27, 27);
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

  @media (max-width: 955px) {
    form {
      width: 70%;
    }
  }

  @media (max-width: 555px) {
    form {
      width: 80%;
    }
  }

  @media (max-width: 455px) {
    form {
      width: 95%;
    }
  }
`;
