import styled from "styled-components";

export const SidebarContainer = styled.div`
  flex: 1;
  background-color: red;
  border-right: gray 2px solid;
  .top {
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .center {
    padding-left: 10px;

    ul {
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        display: flex;
        align-items: center;
        cursor: pointer;

        &:hover {
          background-color: gray;
        }

        .icon {
          font-size: 18px;
          color: green;
        }

        span {
          font-size: 13px;
          font-weight: 600;
          color: black;
          margin-left: 10px;
        }
      }
    }
  }

  .bottom {
    display: flex;
    align-items: center;
    margin: 10px;
    .color-option {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      border: 1px solid green;
      cursor: pointer;

      &:nth-child(1) {
        background-color: white;
      }

      &:nth-child(2) {
        background-color: violet;
      }
    }
  }
  hr {
    border: gray 2px solid;
  }
`;
