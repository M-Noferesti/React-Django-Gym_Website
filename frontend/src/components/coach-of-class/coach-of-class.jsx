import React from "react";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CoachOfClassContainer } from "./coach-of-class-styles";

function CoachOfClass({
  name,
  info1,
  info2,
  info3,
  info4,
  resume,
  instagram_link,
  twitter_link,
  facebook_link,
  photo,
}) {
  return (
    <CoachOfClassContainer className="row no-gutters">
      <div className="col-lg-4 coach-image">
        <img src={photo} alt="coach" />
      </div>
      <div className="col-lg-4 coach-info">
        <div className="coach-header">
          <h3>{name}</h3>

          <p>{info1}</p>
          <p>{info2}</p>
          <p>{info3}</p>
          <p>{info4}</p>

          <h5>سابقه همکاری:{resume}</h5>
        </div>

        <div className="coach-social">
          <a href={instagram_link}>
            <FontAwesomeIcon icon={faInstagram} mask={["fab"]} />
          </a>
          <a href={facebook_link}>
            <FontAwesomeIcon icon={faFacebook} mask={["fab"]} />
          </a>
          <a href={twitter_link}>
            <FontAwesomeIcon icon={faTwitter} mask={["fab"]} />
          </a>
        </div>
      </div>
    </CoachOfClassContainer>
  );
}

export default CoachOfClass;
