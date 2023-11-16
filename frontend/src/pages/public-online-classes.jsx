import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./../components/banners/banner";
import { AttendingClassesData } from "./../components/class-card/online-class-data";
import public_online_class_banner from "../static-images/banners/public online classes banner.jpg";
import Spinner from "../components/spinner/spinner";
import Message from "./../components/message/message";
import axios from "axios";
import Pagination from "../components/pagination/pagination";
import OnlineClassCard from "./../components/class-card/online-class-card";
import { getPublicOnlineClassesListAction } from "./../store/classes-list/online-classes/classes-list-actions";

function PublicOnlineClassesPage() {
  const dispatch = useDispatch();
  const classesListSelector = useSelector((state) => state.onlineClassesList);
  const { error, loading, online_classes } = classesListSelector;
  const [page, setPage] = useState(1);
  const [total_pages, setTotalPages] = useState();

  useEffect(() => {
    dispatch(getPublicOnlineClassesListAction(page));

    axios
      .get("/api/classes/public-online-classes/pagination")
      .then((response) => {
        setTotalPages(response.data["total_pages"]);
      });
  }, [dispatch, page]);

  return (
    <div>
      <Banner
        title="کلاس های انلاین خصوصی"
        first_parent="کلاس های انلاین خصوصی"
        image={public_online_class_banner}
      />
      {loading ? (
        <Spinner />
      ) : error ? (
        <h1>
          <Message type="fail" text={error} />
        </h1>
      ) : (
        <div className="row no-gutters my-4">
          {online_classes.public_online_classes.map((index) => (
            <div className="col-md-4">
              <OnlineClassCard
                image={index.image}
                title={index.title}
                workoutType={index.workoutType}
                monthly_fee={index.monthly_fee}
                registered={index.registered}
                id={index.id}
                key={index.id}
                is_public={true}
              />
            </div>
          ))}
        </div>
      )}
      <Pagination total_pages={total_pages} page={page} setPage={setPage} />
    </div>
  );
}

export default PublicOnlineClassesPage;
