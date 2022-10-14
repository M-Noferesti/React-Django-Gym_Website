import React from "react";
import { urls } from "./map-title-to-url";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import { BannerContainer } from "./banners-styles";
import { Link } from "react-router-dom";

function Banner({ title, image, first_parent, second_parent, third_parent }) {
  return (
    <BannerContainer>
      <img src={image} alt={title} />
      <div className="content">
        <h1>{title}</h1>
        <div className="page-address">
          <FontAwesomeIcon icon={faHome} />
          <Link to="/">خانه</Link>

          {first_parent ? (
            <div>
              <Link to={urls.get(first_parent)}>{first_parent}</Link>
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
          ) : null}
          {second_parent ? (
            <div>
              <Link to={urls.get(second_parent)}>{second_parent}</Link>
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
          ) : null}

          {third_parent ? (
            <div>
              <Link to={urls.get(third_parent)}>{third_parent}</Link>
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
          ) : null}
        </div>
      </div>
    </BannerContainer>
  );
}

export default Banner;
