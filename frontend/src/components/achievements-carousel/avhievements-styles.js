import styled from "styled-components";

const background_color = "rgb(27, 27, 27)";
export const AchievementsContainer = styled.div`
  margin: 20px 0;
  .achievement-carousel {
    padding: 10px 20px;
    background-color: ${background_color};
    border-radius: 120px;
    .item {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 80%;
      margin: 0 auto;
      background-color: transparent;

      img {
        border-radius: 50%;
        width: calc(100px + 1vw);
        height: calc(100px + 1vw);

        border: red solid 3px;
      }

      p {
        margin-top: 10px;
        color: red;
        font-size: calc(10px + 0.7vw);
        direction: rtl;
        text-align: center;
      }
    }
    .owl-prev {
      background-color: transparent !important;
      height: calc(20px + 2vw);
      width: calc(20px + 2vw);
      position: absolute;
      top: 43%;
      left: 7px;
      display: block !important;
      border: 0px solid green;
    }

    .owl-next {
      background-color: transparent !important;
      height: calc(20px + 2vw);
      width: calc(20px + 2vw);
      position: absolute;
      top: 43%;
      right: 8px;
      display: block !important;
      border: 0px solid green;
    }

    .owl-prev span,
    .owl-next span {
      font-size: calc(30px + 2vw);
      font-weight: bolder;
      line-height: calc(5px + 2vw);
      color: red;
    }

    .owl-prev span:hover,
    .owl-next span:hover {
      color: $ThirdColor;
    }

    .owl-item {
      background-color: transparent !important;
    }

    .owl-dots {
      display: flex;
      justify-content: center;
      margin-top: 0.5em !important;
      height: 50px;
      .owl-dot {
        span {
          width: 15px !important;
        }
      }
      .active {
        width: auto !important;

        span {
          background-color: red !important;
        }
      }
    }
  }
`;
