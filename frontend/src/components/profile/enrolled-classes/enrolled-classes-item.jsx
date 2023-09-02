import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faClock } from "@fortawesome/free-solid-svg-icons";
import {
  renewalAttendingClassesAction,
  renewalOnlineClassesAction,
} from "../../../store/enrolment/renewal-enrolled-classes/action";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../message/message";

import { getEnrollmentHistoryAction } from "../../../store/enrolment/enrolment-history/action";
import {
  enrolledAttendingClassesAction,
  enrolledOnlineClassesAction,
} from "../../../store/enrolment/enrolled_classes/action";

function EnrolledClassesItem({ data }) {
  const [renewal, setRenewal] = useState(0);
  const {
    success,
    error,
    id: response_id,
  } = useSelector((state) => state.renewalState);
  const dispatch = useDispatch();

  const renewalHandler = async () => {
    if (data.attending_class) {
      await dispatch(
        renewalAttendingClassesAction(data.id, data.attending_class.id, renewal)
      );
      dispatch(enrolledAttendingClassesAction());
    } else {
      await dispatch(
        renewalOnlineClassesAction(data.id, data.online_class.id, renewal)
      );
      dispatch(enrolledOnlineClassesAction());
    }
    dispatch(getEnrollmentHistoryAction());
    setRenewal(0);
  };

  return (
    <div>
      {response_id == data.id ? (
        success ? (
          <Message text="با موفقیت تمدید شد" type="success" />
        ) : error ? (
          <Message
            text="فرایند تمدید با مشکل رو به رو شد لطفا بعدا تلاش کنید"
            type="fail"
          />
        ) : null
      ) : null}
      <div className="class">
        {data.attending_class ? (
          <img
            src={data.attending_class.image}
            alt={data.attending_class.title}
          />
        ) : (
          <img src={data.online_class.image} alt={data.online_class.title} />
        )}

        <div className="details">
          <Link to={`./class-details/${data.id}`}>
            جزئیات بیشتر <FontAwesomeIcon icon={faEye} />
          </Link>
          <span>
            {data.left_days} روز باقی مانده <FontAwesomeIcon icon={faClock} />
          </span>
        </div>

        <div className="renewal">
          <span>تمدید برای {renewal} ماه:</span>
          <button className="increase" onClick={() => setRenewal(renewal + 1)}>
            +
          </button>
          <button
            className="decrease"
            onClick={() => setRenewal(renewal - 1)}
            disabled={renewal > 0 ? false : true}
          >
            -
          </button>
        </div>

        <button
          onClick={() => renewalHandler()}
          disabled={renewal > 0 ? false : true}
        >
          تایید و پرداخت
        </button>
      </div>
    </div>
  );
}

export default EnrolledClassesItem;
