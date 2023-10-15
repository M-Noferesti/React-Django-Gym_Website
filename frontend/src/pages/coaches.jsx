import React, { useEffect, useState } from "react";
import axios from "axios";
// import { CoachesData } from "./../components/coaches-carousel/coaches-data";
import CoachCard from "./../components/coach-card/coach-card";
import Banner from "./../components/banners/banner";
import coaches_banner from "../static-images/banners/coaches_banner.jpg";
import Spinner from "../components/spinner/spinner";
import Message from "./../components/message/message";
import { useDispatch, useSelector } from "react-redux";
import { coachesListAction } from "./../store/coaches-list/coaches-list-actions";
import Pagination from "../components/pagination/pagination";

function CoachesPage() {
  const dispatch = useDispatch();
  const coachesListSelector = useSelector((state) => state.coachesList);
  const { error, loading, coaches } = coachesListSelector;
  const [page, setPage] = useState(1);
  const [total_pages, setTotalPages] = useState();

  useEffect(() => {
    dispatch(coachesListAction(page));

    axios.get("/api/coaches/pagination").then((response) => {
      setTotalPages(response.data["total_pages"]);
    });
  }, [dispatch, page]);

  return (
    <div>
      <Banner title="مربیان" first_parent="مربیان" image={coaches_banner} />
      <div className="container">
        {loading ? (
          <Spinner />
        ) : error ? (
          <h1>
            <Message type="fail" text={error} />
          </h1>
        ) : (
          <div className="row">
            {coaches.map((index) => (
              <div key={index.id} className="col-md-4">
                <CoachCard data={index} />
              </div>
            ))}
          </div>
        )}
      </div>
      <Pagination total_pages={total_pages} page={page} setPage={setPage} />
    </div>
  );
}

export default CoachesPage;
