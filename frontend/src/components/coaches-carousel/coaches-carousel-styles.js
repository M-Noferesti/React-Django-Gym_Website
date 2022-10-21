import styled from "styled-components";

const background_color = "rgb(27, 27, 27)";

export const CoachesCarouselContainer = styled.div`
  .coach-carousel {
    margin: 20px 0;

    .coach-card {
      width: 100%;
      border: none;
      background-color: ${background_color};
      margin: 20px 0;
      height: 300px;
      .coach-img {
        height: 350px !important;
        width: 98% !important;
        padding: 10px;
      }

      &:hover .coach-body {
        bottom: 0px;
        transition: 0.4s;
      }

      .coach-body {
        position: absolute;
        width: 100%;
        bottom: -50px;
        background-color: red;
        display: flex;
        justify-content: center;
        flex-direction: column;

        .coach-info {
          justify-content: space-around;
          display: flex;
          padding: 10px 0;
          background-color: ${background_color};
          a {
            border-radius: 10px;
            color: red;
            font-size: 22px;
            i {
              padding: 8px;
            }
          }
        }

        .coach-name {
          font-size: 30px;
          text-align: center;
          color: white;
          padding: 10px 0 15px 0;
          margin: 0;
        }
      }

      .coach-info a:hover svg {
        color: white;
      }
    }
    .owl-dots {
      display: flex;
      justify-content: center;
      margin-top: 2em !important;

      .owl-dot {
        span {
          width: 35px !important;
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
