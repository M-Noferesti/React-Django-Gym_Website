import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./../components/banners/banner";
import { AttendingClassesData } from "./../components/class-card/attending-class-data";
import attending_class_banner from "../static-images/banners/attending_classes_banner.jpg";
import Spinner from "../components/spinner/spinner";
import Message from "./../components/message/message";
import axios from "axios";
import Pagination from "../components/pagination/pagination";
import AttendingClassCard from "./../components/class-card/attending-class-card";
import { getAttendingClassesListAction } from "../store/classes-list/attending-classes/classes-list-actions";

function AttendingClassesPage() {
  const dispatch = useDispatch();
  const classesListSelector = useSelector(
    (state) => state.attendingClassesList
  );
  const { error, loading, attending_classes } = classesListSelector;
  const [page, setPage] = useState(1);
  const [total_pages, setTotalPages] = useState();

  useEffect(() => {
    dispatch(getAttendingClassesListAction(page));

    axios.get("/api/classes/attending-classes/pagination").then((response) => {
      setTotalPages(response.data["total_pages"]);
    });
  }, [dispatch, page]);

  return (
    <div>
      <Banner
        title="کلاس های حضوری"
        first_parent="کلاس های حضوری"
        image={attending_class_banner}
      />
      {loading ? (
        <Spinner />
      ) : error ? (
        <h1>
          <Message type="fail" text={error} />
        </h1>
      ) : (
        <div className="row no-gutters my-4">
          {attending_classes.map((index) => (
            <div className="col-md-4">
              <AttendingClassCard
                image={index.image}
                title={index.title}
                workoutType={index.workoutType}
                monthly_fee={index.monthly_fee}
                registered={index.registered}
                id={index.id}
                key={index.id}
              />
            </div>
          ))}
        </div>
      )}
      <Pagination total_pages={total_pages} page={page} setPage={setPage} />
    </div>
  );
}

export default AttendingClassesPage;
