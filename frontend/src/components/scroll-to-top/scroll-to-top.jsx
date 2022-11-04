import React, { useState, useEffect } from "react";
import { ScrollContainer } from "./scroll-to-top-styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.pageYOffset > 1000 ? setShow(true) : setShow(false)
    );
  });
  const handleScroll = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <ScrollContainer onClick={() => handleScroll()} show={show}>
      <FontAwesomeIcon icon={faChevronUp} />
    </ScrollContainer>
  );
}

export default ScrollToTop;
