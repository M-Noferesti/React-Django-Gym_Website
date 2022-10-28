import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from "react";
import { AchievementsContainer } from "./avhievements-styles";

function AchievementsCarousel({ data }) {
  return (
    <div className="container">
      <AchievementsContainer>
        <OwlCarousel
          className="achievement-carousel owl-theme"
          loop
          nav
          items={1}
          autoplay
          dots
        >
          {data.map((index, counter) => (
            <div className="item" key={counter}>
              <img src={index.image} alt={`achievement ${counter}`} />
              <p>{index.description}</p>
            </div>
          ))}
        </OwlCarousel>
      </AchievementsContainer>
    </div>
  );
}

export default AchievementsCarousel;
