import styled from "styled-components";

export const PaginationContainer = styled.div`
  .pagination {
    display: flex;
    justify-content: center;

    .page-item {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 2px;

      color: white;
      background-color: #ff1919;
      border: none;
      text-decoration: none;
      padding: 8px;
      border-radius: 3px;

      &:hover {
        background-color: white !important;
        color: black;
        cursor: pointer;
      }

      &:focus,
      &:active {
        outline: none !important;
        box-shadow: none !important;
      }
      &.active {
        background-color: #1b1b1b;

        & :hover {
          color: white;
        }
      }
    }
  }

  .disabled {
    color: black !important;
    :hover {
      cursor: none !important;
    }
  }

  .arrow {
    font-size: 20px;
    text-decoration: none;
    color: white;
    background-color: transparent;
    list-style-type: none;
    margin: 5px;
    &:hover {
      color: red;
      background-color: transparent;
      :hover {
        cursor: pointer;
      }
    }
  }
`;
