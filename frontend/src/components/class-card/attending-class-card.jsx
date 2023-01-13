import React, { useEffect, useState } from "react";
import { ClassCardContainer } from "./class-card-styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faTags, faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { enrollAction } from "../../store/enrolment/enrolment-requests/attending-classes/actions";
import { disenrollAction } from "../../store/enrolment/enrolment-requests/attending-classes/actions";

function AttendingClassCard({ image, title, workoutType, monthly_fee, id }) {
  const dispatch = useDispatch();

  const { requestedClasses } = useSelector((state) => state);

  const { enrolledClasses } = useSelector((state) => state);

  const [requested, setRequested] = useState(false);
  const [is_enrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    if (enrolledClasses) {
      enrolledClasses.attending_classes.find((x) => x.attending_class.id == id)
        ? setIsEnrolled(true)
        : setIsEnrolled(false);
    }

    if (requestedClasses) {
      const attending_classes = requestedClasses.attending_classes;

      attending_classes.find((x) => x.attending_class.id == id)
        ? setRequested(true)
        : setRequested(false);
    }
  }, [dispatch, requested, is_enrolled, requestedClasses, enrolledClasses]);

  return (
    <ClassCardContainer>
      <img src={image} alt={title} />

      <div className="card-header">
        <h1>{title}</h1>
        <h5>{workoutType}</h5>
      </div>

      {!is_enrolled ? (
        <div className="operations">
          <Link to={`./attending-class-details/${id}`}>
            جزئیات بیشتر
            <FontAwesomeIcon icon={faEye} />
          </Link>

          <span className="cost">
            {monthly_fee} تومان
            <FontAwesomeIcon icon={faTags} />
          </span>

          {requested ? (
            <button onClick={() => dispatch(disenrollAction(id))}>
              لغو ثبت نام
              <FontAwesomeIcon icon={faClipboard} />
            </button>
          ) : (
            <button onClick={() => dispatch(enrollAction(id))}>
              ثبت نام
              <FontAwesomeIcon icon={faClipboard} />
            </button>
          )}
        </div>
      ) : (
        <div className="operations">
          <Link to={`./attending-class-details/${id}`}>
            جزئیات بیشتر
            <FontAwesomeIcon icon={faEye} />
          </Link>
        </div>
      )}
    </ClassCardContainer>
  );
}

export default AttendingClassCard;
