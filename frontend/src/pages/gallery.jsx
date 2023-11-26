import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Gallery from "./../components/gallery/gallery";
import { images } from "./../components/gallery/gallery-data";
import Banner from "./../components/banners/banner";
import { FilterData } from "./../components/gallery/filter-data";
import { FiltersContainer } from "./../components/gallery/filter-styles";
import gallery_banner from "../static-images/banners/gallery_banner.jpg";
import { galleryAction } from "./../store/gallery/gallery-actions";
import axios from "axios";
import Spinner from "../components/spinner/spinner";
import Message from "./../components/message/message";
import Pagination from "../components/pagination/pagination";

function GalleryPage() {
  const dispatch = useDispatch();
  const galleryListSelector = useSelector((state) => state.gallery);
  const { error, loading, gallery } = galleryListSelector;

  const [filter, setFilter] = useState("all");
  const [filterData, setFilterData] = useState();
  const [page, setPage] = useState(1);
  const [total_pages, setTotalPages] = useState();

  useEffect(() => {
    if (page === undefined) dispatch(galleryAction(1));
    else dispatch(galleryAction(page, filter));

    axios.get("/api/gallery/tags").then((response) => {
      setFilterData(response.data);
    });

    axios
      .post(
        "/api/gallery/pagination",
        { filter: filter },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then((response) => {
        setTotalPages(response.data["total_pages"]);
      });
  }, [dispatch, page]);

  const handleFilter = (tag) => {
    setFilter(tag);
    setPage(1);
    axios
      .post(
        "/api/gallery/pagination",
        { filter: tag },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then((response) => {
        setTotalPages(response.data["total_pages"]);
      });

    dispatch(galleryAction(1, tag));
  };
  return (
    <div>
      <Banner title="گالری" first_parent="گالری" image={gallery_banner} />

      {loading ? (
        <Spinner />
      ) : error ? (
        <h1>
          <Message type="fail" text={error} />
        </h1>
      ) : (
        <div>
          {filterData ? (
            <FiltersContainer>
              <button
                className={filter === "all" ? "filter active" : "filter"}
                onClick={() => handleFilter("all")}
              >
                all
              </button>
              {filterData.map((index) => (
                <button
                  key={index.id}
                  className={filter === index.tag ? "filter active" : "filter"}
                  onClick={() => handleFilter(index.tag)}
                >
                  {index.tag}
                </button>
              ))}
            </FiltersContainer>
          ) : null}
          <Gallery
            data={gallery.length != 0 ? gallery : []}
            is_preview={false}
          />
        </div>
      )}

      <Pagination total_pages={total_pages} page={page} setPage={setPage} />
    </div>
  );
}

export default GalleryPage;
