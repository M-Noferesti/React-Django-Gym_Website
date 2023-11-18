import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/message/message";
import Spinner from "../components/spinner/spinner";
import { publicOnlineClassDetailsAction } from "../store/class-details/online-classes/class-details-actions";
import ClassDetails from "./../components/class-details/class-details";

function PublicOnlineClassDetails({ match }) {
  const dispatch = useDispatch();
  const classDetailsSelector = useSelector((state) => state.onlineClassDetails);
  const { error, loading = true, currentClass } = classDetailsSelector;

  useEffect(() => {
    dispatch(publicOnlineClassDetailsAction(match.params.id));
  }, [dispatch, match]);

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

export default PublicOnlineClassDetails;
