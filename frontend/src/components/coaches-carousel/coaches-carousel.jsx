import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { CoachesCarouselContainer } from "./coaches-carousel-styles";
import { useSelector, useDispatch } from "react-redux";
import { coachesListAction } from "./../../store/coaches-list/coaches-list-actions";

function CoachesCarousel() {
  const responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  };

  const dispatch = useDispatch();
  const { errorCoaches, loadingCoaches, coaches } = useSelector(
    (state) => state.coachesList
  );

  useEffect(() => {
    dispatch(coachesListAction(1));
  }, [dispatch]);

  return (
    <CoachesCarouselContainer className="container">
      <OwlCarousel
        className="coach-carousel owl-theme"
        loop
        margin={40}
        autoplay
        responsive={responsive}
        dots
      >
        {coaches.map((index) => (
          <div className="coach-card" key={index.id}>
            <img className="coach-img" src={index.photo} alt="coach" />
            <div className="coach-body">
              <p className="coach-name">{index.username}</p>

              <div className="coach-info">
                <a href={index.instagram_link}>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href={index.twitter_link}>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href={index.facebook_link}>
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </CoachesCarouselContainer>
  );
}

export default CoachesCarousel;
