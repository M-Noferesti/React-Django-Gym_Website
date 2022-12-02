import { LightBoxGallery, GalleryItem } from "react-magnific-popup";
import React from "react";
import { GalleryContainer } from "./gallery-syles";
import "./zoomed-gallery.css";
import arrow from "../../static-images/arrow.png";
import close from "../../static-images/close.png";

const config = {
  delegate: "a",
  type: "image",
  closeOnContentClick: false,
  closeBtnInside: false,
  mainClass: "mfp-with-zoom mfp-img-mobile",
  closeMarkup: `<button  class="mfp-close" style=" right: 8px"><img src=${close} class="mfp-close" style="width:50px;height:50px"/></button>`,
  gallery: {
    enabled: true,
    arrowMarkup: `<img class="mfp-arrow custom-mfp-arrow-%dir%" src=${arrow} style="margin:0"/>`,

    tPrev: "Previous",
    tNext: "Next",
  },
  zoom: {
    enabled: true,
    duration: 300, // don't foget to change the duration also in CSS
    opener: function (element) {
      return element.find("img");
    },
  },
};

const Gallery = ({ data, is_preview }) => {
  return (
    <GalleryContainer preview={is_preview}>
      <LightBoxGallery className="popup-gallery" config={config}>
        {data.map((index) => (
          <div className="overlay-gallery" key={index.id}>
            <GalleryItem href={index.photo} title={index.title}>
              <img src={index.photo} alt={index.title} />
            </GalleryItem>
          </div>
        ))}
      </LightBoxGallery>
    </GalleryContainer>
  );
};

export default Gallery;
