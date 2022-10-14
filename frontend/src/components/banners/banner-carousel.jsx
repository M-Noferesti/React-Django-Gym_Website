import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { BannerCarouselContainer } from "./banner-carousel-styles";
import carousel_banner_1 from "../../static-images/banners/carousel_banner_1.jpg";
import carousel_banner_2 from "../../static-images/banners/carousel_banner_2.jpg";
import carousel_banner_3 from "../../static-images/banners/carousel_banner_3.jpg";
import carousel_banner_4 from "../../static-images/banners/carousel_banner_4.jpg";

function BannerCarousel() {
  return (
    <BannerCarouselContainer>
      <OwlCarousel
        className="banner-carousel owl-theme"
        animateOut={"fadeOut"}
        animateIn={"flipInX"}
        items={1}
        smartSpeed={450}
        nav
        loop
        dots={false}
        mouseDrag={false}
        touchDrag={false}
      >
        <div className="item">
          <img src={carousel_banner_1} alt="" />
          <div className="text-banner">
            <div>
              <span>محیطی</span>
              <span className="highlighted">وسیع</span>
              <span>مجهز به</span>
            </div>
            <div>
              <span>امکانات</span>
              <span className="highlighted">پیشرفته</span>
              <span>ورزشی</span>
            </div>
          </div>
        </div>

        <div className="item">
          <img src={carousel_banner_2} alt="" />
          <div className="text-banner">
            <div>
              <span className="highlighted">آموزش</span>
              <span>و</span>
              <span className="highlighted">تمرین</span>
              <span>زیر نظر</span>
            </div>
            <div>
              <span>مربیان</span>
              <span className="highlighted">مجرب</span>
              <span>و</span>
              <span className="highlighted">متخصص</span>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={carousel_banner_3} alt="" />
          <div className="text-banner">
            <div>
              <span className="highlighted">پشتیبانی</span>
              <span>و</span>
              <span className="highlighted">مشاوره</span>
            </div>
            <div>
              <span className="highlighted">آنلاین</span>
              <span>و</span>
              <span className="highlighted">تمام وقت</span>
            </div>
          </div>
        </div>

        <div className="item">
          <img src={carousel_banner_4} alt="" />
          <div className="text-banner">
            <div>
              <span>بلاگ</span>
              <span className="highlighted"> آموزشی</span>
              <span>و</span>
              <span className="highlighted">بروز</span>
            </div>
            <div>
              <span>با</span>
              <span>مقالات</span>
              <span className="highlighted">اختصاصی</span>
              <span>و</span>
              <span>محتوای</span>
              <span className="highlighted">تخصصی</span>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </BannerCarouselContainer>
  );
}

export default BannerCarousel;
