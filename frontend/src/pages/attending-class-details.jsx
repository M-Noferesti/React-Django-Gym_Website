import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/message/message";
import Spinner from "../components/spinner/spinner";
import { classDetailsAction } from "../store/class-details/attending-classes/class-details-actions";
import ClassDetails from "./../components/class-details/class-details";

function AttendingClassDetails({ match }) {
  const dispatch = useDispatch();
  const classDetailsSelector = useSelector((state) => state.classDetails);
  const { error, loading = true, currentClass } = classDetailsSelector;

  useEffect(() => {
    dispatch(classDetailsAction(match.params.id));
  }, [dispatch]);

  console.log(loading, error, currentClass);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Message text={error} type="fail" />
      ) : (
        <ClassDetails data={currentClass} />
      )}
    </div>
  );
}

export default AttendingClassDetails;
