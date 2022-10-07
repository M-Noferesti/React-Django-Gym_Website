import React, { useState, useEffect, useRef } from "react";
import { SideBarContainer } from "./navbar-styles";
import SideBarItems from "./sidebar-item";

function SideBar({ clicked, setClicked, sidebarButton, items: receviedItems }) {
  const [items, setItems] = useState(receviedItems);
  const [openedItems, setOpenedItems] = useState({});
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        !sidebarButton.current.contains(event.target) &&
        !wrapperRef.current.contains(event.target)
      ) {
        setClicked(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <SideBarContainer clicked={clicked} ref={wrapperRef}>
      <SideBarItems
        items={items}
        openedItems={openedItems}
        onChange={(selectedOpenedItem) => setOpenedItems(selectedOpenedItem)}
      />
    </SideBarContainer>
  );
}

export default SideBar;
