import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function SideBarItems({ items, openedItems, onChange }) {
  const handelShow = (selectedItemTitle) => {
    if (openedItems[selectedItemTitle]) {
      delete openedItems[selectedItemTitle];
    } else {
      openedItems[selectedItemTitle] = {};
    }
    onChange({ ...openedItems });
  };

  const handelSubNav = (subItemTitle, selectedSubItem) => {
    openedItems[subItemTitle] = selectedSubItem;
    onChange({ ...openedItems });
  };

  return (
    <div>
      {items.map((item) => (
        <li key={item.title}>
          <div
            className="click"
            onClick={item.subItems ? () => handelShow(item.title) : null}
          >
            <NavLink exact to={item.url}>
              {item.title}
            </NavLink>
            {openedItems[item.title] && item.subItems ? (
              <FontAwesomeIcon icon={faArrowAltCircleUp} />
            ) : item.subItems ? (
              <FontAwesomeIcon icon={faArrowAltCircleDown} />
            ) : null}
          </div>

          {item.subItems && openedItems[item.title] ? (
            <div className="sub-item">
              <ul>
                <SideBarItems
                  items={item.subItems}
                  openedItems={openedItems[item.title]}
                  onChange={(selectedSubItem) =>
                    handelSubNav(item.title, selectedSubItem)
                  }
                />
              </ul>
            </div>
          ) : null}
        </li>
      ))}
    </div>
  );
}

export default SideBarItems;
