import styled from "styled-components";

export const BannerCarouselContainer = styled.div`
  .banner-carousel {
    word-spacing: 3px;
    width: 100%;
    .item {
      height: 625px;
      width: 100%;
    }
    .item::before {
      content: "";
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      left: 0;
      background: radial-gradient(
        ellipse at center,
        rgba(181, 8, 8, 0.38) 0%,
        rgba(0, 0, 0, 0.6) 100%
      );
      background-size: 100% 100%;
    }

    .text-banner {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      overflow: hidden;

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        direction: rtl;
        text-align: right;
        margin-top: 30px;
        span,
        .highlighted {
          font-weight: 900;
          font-size: calc(10px + 4vw);
          margin-right: 15px;
          color: white;
        }
        .highlighted {
          color: #ff1919;
        }
      }
    }
    .item img {
      width: 100%;
      height: 100%;
    }

    .owl-prev {
      background-color: red !important;
      height: calc(20px + 2vw);
      width: calc(20px + 2vw);
      position: absolute;
      top: 50%;
      left: 7px;
      display: block !important;
      border: 0px solid black;
    }

    .owl-next {
      background-color: red !important;
      height: calc(20px + 2vw);
      width: calc(20px + 2vw);
      position: absolute;
      top: 50%;
      right: 8px;
      display: block !important;
      border: 0px solid black;
    }

    .owl-prev span,
    .owl-next span {
      font-size: calc(30px + 2vw);
      font-weight: bolder;
      line-height: calc(5px + 2vw);
      color: black;
      margin-bottom: 15px;
      display: block;
    }

    .owl-prev span:hover,
    .owl-next span:hover {
      color: white;
    }

    @media (max-width: 768px) {
      .item {
        height: 400px;
      }
    }

    @media (max-width: 400px) {
      .item {
        height: 300px;
      }
    }
  }
`;
