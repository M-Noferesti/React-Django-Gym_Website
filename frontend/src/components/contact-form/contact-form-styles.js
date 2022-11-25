import styled from "styled-components";

const background_color = "rgb(27, 27, 27)";
export const ContactFormContainer = styled.div`
  background-color: ${background_color};
  padding: 10px;
  border-radius: 10px;
  margin: 2em auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  h4 {
    margin: 15px;
    color: red;
    font-weight: bolder;
  }

  p {
    font-size: calc(11px + 0.5vw);
    color: white;
  }
  .form {
    padding: 10px;
    width: 80%;
    text-align: center;
    input[type="submit"] {
      background-color: red;
      border: none;
      color: white;
      width: 50%;
      font-weight: bolder;
      font-size: 20px;
      padding: 5px;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        background-color: rgb(200, 0, 0);
      }
    }
    .inputs {
      width: 100%;
      display: flex;
      margin-bottom: 15px;
      justify-content: center;

      .append {
        background-color: red;
        padding: 10px;
        text-align: center;
        display: flex;
        align-items: center;
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
        border: 2px solid ${background_color};
        border-left: none;
        svg {
          color: white;
        }
      }
      input[type="text"],
      input[type="email"],
      textarea {
        width: 90%;
        height: 50px;
        direction: rtl;
        padding: 10px;
        outline: none;
        border: none;
        border: 2px solid ${background_color};
        border-right: none;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;

        &:focus + .append {
          border: 2px solid red;
          border-left: none;
        }
        &:focus {
          border: 2px solid red;
          border-right: none;
        }
      }
    }
  }
`;
