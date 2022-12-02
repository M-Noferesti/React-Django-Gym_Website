import styled, { keyframes } from "styled-components";

const gallery = keyframes`
    from {
        opacity: 0;
       
    }
    to {
        opacity: 1;
       
    }

`;
export const GalleryContainer = styled.div`
  margin: 20px 3em;
  .popup-gallery {
    column-count: 3;

    ${({ filter }) =>
      !filter &&
      ` column-count: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .overlay-gallery {
      width:100%;
      margin: 0 10px;
    }
        
    `}
    .overlay-gallery {
      animation: ${gallery} 1s;
      height: 200px;
      margin-bottom: 10px;
      ${({ filter }) =>
        filter &&
        `
        
      &:nth-of-type(even) {
        height: 350px;
      }
      &:nth-of-type(10) {
        height: 250px;
      }`}

      height: 250px;
      img {
        width: 100%;
        height: 100%;
      }
      ${({ preview }) =>
        preview &&
        ` &:nth-of-type(1),
      &:nth-of-type(6) {
        height: 350px;
        margin-bottom: 15px;
      }

      &:nth-of-type(3),
      &:nth-of-type(5) {
        height: 193px;
      }

      &:nth-of-type(2),
      &:nth-of-type(7) {
        height: 400px;
      }
      &:nth-of-type(4) {
        height: 350px;
        margin: 15px 0;
      }`}

      &:hover {
        transform: scale(1.01);
        transition: 0.3s;

        a::before {
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
      }
    }
  }
  @media (max-width: 768px) {
    .popup-gallery {
      column-count: 2;
      display: block;
    }
    .popup-gallery {
      .overlay-gallery {
        height: 150px;
        &:nth-of-type(n) {
          height: 150px;
          margin: 0;
          margin-bottom: 15px;
        }
        ${({ preview }) =>
          preview &&
          ` &:nth-of-type(4) {
          // transform: translateX(50%);
          display: none;
        } `}

        &:nth-of-type(8) {
          display: none;
        }
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
  }
`;
