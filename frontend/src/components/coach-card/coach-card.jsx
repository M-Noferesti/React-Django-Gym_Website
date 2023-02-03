import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CoachCardContainer } from "./coach-card-styles";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function CoachCard({ data }) {
  const {
    username,
    info_1,
    info_2,
    info_3,
    info_4,
    hire_date,
    instagram_link,
    twitter_link,
    facebook_link,
    photo,
    attending_classes,
    online_classes,
  } = data;

  // const convert_data = (date) => {
  //   var hire_time = new Date(date).getTime();
  //   var current_time = new Date().getTime();
  //   var total_time = current_time - hire_time;
  //   console.log(total_time);
  // };

  const [showClasses, setShowClasses] = useState(false);

  const handleShowClasses = () => {
    setShowClasses(!showClasses);
  };

  return (
    <CoachCardContainer toggle={showClasses}>
      <button className="button" onClick={() => handleShowClasses()}>
        کلاس ها
      </button>

      <img src={photo} alt="coach" />
      <div className="name">
        <span>{username}</span>
      </div>
      <div className="coach-info">
        <div className={"classes" + (showClasses ? " open" : " close")}>
          <span>
            {attending_classes.map((index, counter) => (
              <div key={counter}>{index.title}</div>
            ))}
          </span>
          <span>
            {online_classes.map((index, counter) => (
              <div key={counter}>{index.title}</div>
            ))}
          </span>
        </div>
        <p className="info">{info_1}</p>
        <p className="info">{info_2}</p>
        <p className="info">{info_3}</p>
        <p className="info">{info_4}</p>
      </div>
      <div className="resume">
        <span>تاریخ استخدام :{hire_date}</span>
      </div>

      <div className="social-pages">
        <a href={instagram_link ? instagram_link : null}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href={twitter_link ? twitter_link : null}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>

        <a href={facebook_link ? facebook_link : null}>
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </div>
    </CoachCardContainer>
  );
}

export default CoachCard;
