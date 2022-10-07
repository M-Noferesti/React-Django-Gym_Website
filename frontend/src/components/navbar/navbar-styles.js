import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  padding: 20px;
  font-family: sans-serif;
  background-color: ${(props) =>
    props.navbarColor ? "rgb(27, 27, 27)" : "rgba(0, 0, 0, 0.555)"};
  border-bottom: ${(props) => (props.navbarColor ? "red solid 2px" : "none")};
  text-align: center;
  z-index: 99;
  position: fixed;
  box-sizing: border-box;
  transition: background-color 1s ease;
  .logo {
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px 0;
    span {
      color: red;
      white-space: nowrap;
    }
    img {
      max-height: 100%;
      max-width: 100%;
    }
  }
  .requested-classes {
    display: flex;
    justify-content: center;
    direction: rtl;
    span {
      font-weight: bolder;
      color: red;
      position: relative;
      font-size: calc(10px + 0.5vw);
      white-space: nowrap;
      margin: 2px;
    }
    svg {
      color: red;
    }
  }
  button,
  a {
    background-color: transparent;
    border: none;
    cursor: pointer;
    text-decoration: none;
    .user {
      margin-left: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        font-weight: bolder;
        color: red;
        position: relative;
        font-size: calc(10px + 0.5vw);
        line-height: 35px;
        display: flex;
        justify-content: center;
        white-space: nowrap;
        margin: 2px;
      }
      svg {
        color: red;
        width: calc(15px + 1vw);
        height: calc(15px + 1vw);
        margin-left: 5px;
        padding: 5px;
      }
    }
  }
  .menu-button {
    display: none;
    svg {
      color: red;
      width: 25px;
      height: 25px;
      margin-left: 5px;
    }
  }

  @media (max-width: 700px) {
    height: 70px;

    .menu-button {
      display: block;
    }

    .logo {
      width: 25%;
    }

    .user span {
      font-size: 15px;
    }
  }
`;

export const NavBarItems = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;

  li {
    float: right;
    margin: 0 20px;
    text-align: rtl;
    position: relative;

    &:hover {
      & > .dropdown {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
    }
    a {
      text-decoration: none;
      font-weight: bold;
      color: white;
      position: relative;
      font-size: calc(8px + 1vw);
      &:after {
        position: absolute;
        bottom: -6px;
        left: 0;
        right: 0;
        margin: auto;
        width: 0%;
        content: ".";
        color: transparent;
        background: red;
        height: 2px;
        transition: 0.5s;
      }
      &:hover {
        &:after {
          width: 100%;
        }
      }

      &.active {
        color: red !important;

        &:after {
          position: absolute;
          bottom: -6px;
          left: 0;
          right: 0;
          margin: auto;
          width: 100%;
          content: ".";
          color: transparent;
          background: red;
          height: 2px;
        }
      }
    }
    .dropdown {
      display: none;
      padding: 0;
      position: absolute;
      list-style-type: none;
      width: 200px;
      height: fit-content;
      border-radius: 10px;
      background-color: rgb(27, 27, 27);
      left: 50%;
      transform: translate(-50%, 0);
      li {
        margin: 10px 0;
        width: 100%;
        a {
          text-decoration: none;
          font-weight: bold;
          color: white;
          font-size: calc(5px + 1vw);
          text-align: center;
        }
        & > ul {
          left: 0;
          transform: translate(-80%, -30%);
        }
      }
    }
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const SideBarContainer = styled.ul`
  @keyframes slideDown {
    0% {
      transform: translateY(-40%);
    }

    100% {
      transform: translateY(0%);
    }
  }

  transition: all 0.5s ease;
  background-color: black;
  position: absolute;
  color: wheat;
  top: 90px;
  /* right: ${(props) => (props.clicked ? "0" : "-50%")}; */
  margin: 0;
  padding: 0;
  padding-bottom: 20px;
  width: 200px;
  list-style-type: none;
  z-index: 99999;
  li {
    margin: 20px 0;
    width: 100%;
    text-align: right;
    overflow: hidden;
    &:last-of-type {
      margin-bottom: 0;
    }
    .sub-item {
      padding: 0;
      padding-right: 10px;
      animation: slideDown 1s ease;

      ul {
        list-style-type: none;
        padding: 0;
      }
    }
  }

  a {
    text-decoration: none;
    color: red;
  }
  .click {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    padding: 5px;
  }

  @media (min-width: 700px) {
    display: none;
  }
`;
