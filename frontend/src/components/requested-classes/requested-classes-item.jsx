import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  setPeriodAction as setPeriodAttendingClassAction,
  disenrollAction as disenrollAttendingClassAction,
} from "../../store/enrolment/enrolment-requests/attending-classes/actions";

import { useDispatch } from "react-redux";
import {
  setPeriodAction as setPeriodOnlineClassAction,
  disenrollAction as disenrollOnlineClassAction,
} from "../../store/enrolment/enrolment-requests/online-classes/actions";

function RequestedClassesItem({ item, class_, is_online }) {
  const dispatch = useDispatch();
  const increasePeriodHandler = (id, period, is_online) => {
    const newPeriod = period + 1;
    if (is_online) dispatch(setPeriodOnlineClassAction(id, newPeriod));
    else dispatch(setPeriodAttendingClassAction(id, newPeriod));
  };

  const decreasePeriodHandler = (id, period, is_online) => {
    const newPeriod = period - 1;
    if (newPeriod >= 0) {
      if (is_online) dispatch(setPeriodOnlineClassAction(id, newPeriod));
      else dispatch(setPeriodAttendingClassAction(id, newPeriod));
    }
  };
  return (
    <div className="item" key={class_.id}>
      <img src={class_.image} alt={class_.title} />
      <div className="info">
        <div className="title">{class_.title}</div>
        <div className="period">{item.period} : تعداد دوره </div>
        <div className="price">{item.price} : هزینه </div>
      </div>
      <div className="actions">
        <FontAwesomeIcon
          icon={faPlus}
          onClick={() =>
            increasePeriodHandler(class_.id, item.period, is_online)
          }
        >
          increase
        </FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faMinus}
          onClick={() =>
            decreasePeriodHandler(class_.id, item.period, is_online)
          }
        >
          decrease
        </FontAwesomeIcon>

        <FontAwesomeIcon
          icon={faTrash}
          onClick={() =>
            is_online
              ? dispatch(disenrollOnlineClassAction(class_.id))
              : dispatch(disenrollAttendingClassAction(class_.id))
          }
        >
          delete
        </FontAwesomeIcon>
      </div>
    </div>
  );
}

export default RequestedClassesItem;
