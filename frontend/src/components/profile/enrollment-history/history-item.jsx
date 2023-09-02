import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function HistoryItem({ item }) {
  const [activeItem, setActiveItem] = useState(false);

  const accordionHandler = (id, e) => {
    let item = document.getElementById(id).children[1];
    if (item.style.maxHeight) {
      item.style.maxHeight = null;
      if (e.target.nodeName != "svg")
        e.target.style.backgroundColor = "rgb(27, 27, 27)";
      setActiveItem(false);
    } else {
      item.style.maxHeight = item.scrollHeight + "px";
      if (e.target.nodeName != "svg") e.target.style.backgroundColor = "red";
      setActiveItem(true);
    }
  };
  console.log(new Date(item.update_time));
  return (
    <div className="history-item" id={item.id}>
      <button onClick={(e) => accordionHandler(item.id, e)}>
        <span>
          {Intl.DateTimeFormat("fa-IR").format(new Date(item.update_time))}
          {activeItem ? (
            <FontAwesomeIcon icon={faMinus} />
          ) : (
            <FontAwesomeIcon icon={faPlus} />
          )}
        </span>
      </button>
      <div className="enrolled-classes-history">
        {item.attending_classes.map((y) => (
          <div className="class" key={y.attending_class.id}>
            <img src={y.attending_class.image} alt={y.attending_class.title} />
            <span>هزینه ماهانه : {y.the_then_monthly_fee}</span>
            <span>تعداد دوره : {y.period}</span>
            <span>مجموع هزینه : {y.price}</span>
          </div>
        ))}

        {item.online_classes.map((y) => (
          <div className="class" key={y.online_class.id}>
            <img src={y.online_class.image} alt={y.online_class.title} />
            <span>هزینه ماهانه : {y.the_then_monthly_fee}</span>
            <span>تعداد دوره : {y.period}</span>
            <span>مجموع هزینه : {y.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistoryItem;
