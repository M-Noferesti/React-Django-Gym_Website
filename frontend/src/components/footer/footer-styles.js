import styled from "styled-components";

const background_color = "rgb(27, 27, 27)";

export const FooterContainer = styled.footer`
  background-color: ${background_color};
  font-weight: bolder;
  text-align: center;
  h5 {
    margin: 0;
    color: red;
    font-size: calc(0.5vw + 10px);
  }

  [class*="col-"] {
    margin-top: 0.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 30%;
  }
  .newsletters {
    width: 90%;
    h5 {
      margin: 10px 0;
    }
    form {
      display: flex;
      justify-content: center;
      padding: 0;
      margin: 0;

      input[type="text"] {
        width: 80%;
        font-size: 15px;
        padding: 7px;
        text-align: right;
        border: none;
        &:focus,
        &:active {
          outline: none;
        }
      }
      input[type="submit"] {
        color: white;
        background-color: red;
        padding: 10px;
        border: solid 1px white;
        border-radius: 5px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        &:focus,
        &:active {
          outline: none;
        }
      }

      .inner-icon {
        background-color: red;
        border: solid 1px white;
        border-radius: 5px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        padding: 10px;
        svg {
          color: white;
        }
      }
    }
  }

  .footer-icon {
    display: flex;
    justify-content: center;

    a {
      margin: 10px;
      font-size: 30px;
      width: 50px;
      height: 50px;
      text-align: center;
      align-self: center;
      text-decoration: none;
      border-radius: 50%;
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
      background-color: red;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover svg {
        color: ${background_color};
      }

      svg {
        color: white;
      }
    }
  }
  .useful-links {
    margin-bottom: 2.9rem;

    ul {
      padding: 0;
      li {
        list-style-type: none;
        margin: 16px;
        margin-top: 1.4em;
        a {
          text-decoration: none;
          color: white;

          &:hover {
            color: red;
          }
        }
      }
    }
  }
  .lower-footer {
    color: white;
    background-color: red;
    opacity: 0.8;
    padding: 0.8rem 0;

    a {
      color: black;
      text-decoration: none;
    }
  }

  .contact-us {
    h5 {
      margin-left: 8em;
    }
    .footer-info {
      text-align: right;
      margin: 0;
      margin-right: 7em;
      padding: 0;

      li {
        font-size: 16px;
        color: white;
        position: relative;
        list-style-type: none;
        margin-top: 3em;
        font-weight: normal;

        svg {
          position: absolute;
          right: -1.5em;
          top: 0;
          font-size: 24px;
          color: red;
        }
        span {
          color: red;
          display: block;
          font-family: "Oswald", sans-serif;
          font-weight: bolder;
        }
      }
    }
  }

  .about-us {
    width: 80%;
    line-height: 2rem;
    text-align: justify;
    text-align-last: center;
    color: white;
  }
  @media (max-width: 960px) {
    h5 {
      font-size: calc(2vw + 5px) !important;
    }
    .contact-us {
      h5 {
        text-align: center;
        margin: 2em 0 1em 0;
      }

      .footer-info {
        text-align: center;
        margin-right: 0;

        li {
          font-size: 16px;
          color: white;
          position: relative;
          list-style-type: none;
          margin-bottom: 1em;
          margin-top: 0;
          svg {
            position: relative;
            left: 2em;
            right: 0;
            top: 0.7em;
            font-size: 24px;
            color: red;
          }
          span {
            color: red;
            display: block;
            font-family: "Oswald", sans-serif;
            font-weight: bolder;
          }
        }
      }
    }
  }
`;
