import styled from "styled-components";
export const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  direction: rtl;
  font-size: 0;
  margin: 10px 0;
  .filter {
    background-color: rgb(255, 25, 25);
    border: 1px solid black;
    color: white;
    width: 110px;
    font-weight: bolder;
    margin: 0;
    font-size: 15px;
    cursor: pointer;
  }
  .active {
    background-color: rgb(27, 27, 27);
    color: white;
  }
`;
