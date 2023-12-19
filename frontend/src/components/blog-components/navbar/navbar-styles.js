import styled from "styled-components";

export const NavbarContainer = styled.div`
  height: 50px;
  border-bottom: solid gray 0.5px;
  display: flex;
  align-items: center;
  font-size: 14px;
  background-color: yellow;
  position: relative;
  height: 85px;
  justify-content: flex-end;
  .items {
    width: 50%;
    padding: 20px;
    display: flex;
    align-items: center;
    direction: rtl;
    float: right;
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 20px;
    }
    .avatar {
      margin-left: 20px;
      img {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        border: solid red 1px;
      }
    }
  }
`;
