import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import {
  faEnvelope,
  faMapMarked,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FooterContainer } from "./footer-styles";
import { FooterData } from "./data";
import logo from "../../static-images/logo.png";

function Footer() {
  return (
    <FooterContainer>
      <div className="row no-gutters">
        <div className="col-lg-4">
          <img src={logo} alt="" />
          <h5>Gym Name</h5>
          <div className="mx-auto about-us">
            <p>{FooterData.bio.bio}</p>
          </div>

          <div className="footer-icon">
            <a href={FooterData.bio.instagramLink} className="instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href={FooterData.bio.twitterLink} className="twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href={FooterData.bio.facebookLink} className="facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="useful-links">
            <h5>لینک های مفید</h5>
            <ul>
              <li>
                <a href={Object.values(FooterData.usefulLinks)[0]}>
                  {Object.keys(FooterData.usefulLinks)[0]}
                </a>
              </li>
              <li>
                <a href={Object.values(FooterData.usefulLinks)[1]}>
                  {Object.keys(FooterData.usefulLinks)[1]}
                </a>
              </li>
              <li>
                <a href={Object.values(FooterData.usefulLinks)[2]}>
                  {Object.keys(FooterData.usefulLinks)[2]}
                </a>
              </li>
            </ul>
          </div>

          <div className="newsletters">
            <h5>:از اخرین اطلاعیه های سایت باخبر شوید</h5>

            <form>
              <input type="submit" value="تایید" />
              <input type="text" placeholder="ایمیل خود را وارد نمایید" />
              <div className="inner-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-4 contact-us">
          <h5>ارتباط با ما</h5>
          <ul className="footer-info">
            <li>
              <FontAwesomeIcon icon={faMapMarked} />
              <span>: آدرس ما</span>
              {FooterData.aboutUs.address}
            </li>

            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>: ایمیل</span>
              {FooterData.aboutUs.email}
            </li>

            <li>
              <FontAwesomeIcon icon={faPhone} />
              <span>: تلفن ما</span>
              {FooterData.aboutUs.phone}
            </li>
          </ul>
        </div>
      </div>

      <div className="lower-footer">
        © 2020 Copyright :<a href="/"> My Gym</a>
      </div>
    </FooterContainer>
  );
}

export default Footer;
