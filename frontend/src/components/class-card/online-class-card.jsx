import React, { useEffect, useState } from "react";
import { ClassCardContainer } from "./class-card-styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faTags, faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { enrollAction } from "../../store/enrolment/enrolment-requests/online-classes/actions";
import { disenrollAction } from "../../store/enrolment/enrolment-requests/online-classes/actions";

function OnlineClassCard({
  image,
  title,
  workoutType,
  monthly_fee,
  id,
  is_public,
}) {
  const dispatch = useDispatch();

  const requestedClassesInStorage = useSelector((state) => state);
  const { requestedClasses } = requestedClassesInStorage;

  const enrolledClassesInStorage = useSelector((state) => state);
  const { enrolledClasses } = enrolledClassesInStorage;

  const [requested, setRequested] = useState(false);
  const [is_enrolled, setIsEnrolled] = useState(false);
  useEffect(() => {
    if (enrolledClasses) {
      enrolledClasses.online_classes.find((x) => x.online_class.id === id)
        ? setIsEnrolled(true)
        : setIsEnrolled(false);
    }

    if (requestedClasses) {
      const online_classes = requestedClasses.online_classes;
      online_classes.find((x) => x.online_class.id === id)
        ? setRequested(true)
        : setRequested(false);
    }
  }, [dispatch, requestedClasses, requested, is_enrolled, enrolledClasses]);

  return (
    <ClassCardContainer>
      <img src={image} alt={title} />

      <div className="card-header">
        <h1>{title}</h1>
        <h5>{workoutType}</h5>
      </div>

      {!is_enrolled && !is_public ? (
        <div className="operations">
          <Link to={`./private-online-class-details/${id}`}>
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
          <Link
            to={
              is_public
                ? `./public-online-class-details/${id}`
                : `./private-online-class-details/${id}`
            }
          >
            جزئیات بیشتر
            <FontAwesomeIcon icon={faEye} />
          </Link>
        </div>
      )}
    </ClassCardContainer>
  );
}

export default OnlineClassCard;
