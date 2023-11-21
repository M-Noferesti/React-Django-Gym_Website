import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ParallaxTitle from "../components/parallax-title/parallax-title";
import Gallery from "../components/gallery/gallery";
import AchievementsCarousel from "../components/achievements-carousel/achievements-carousel";
import { AchievementsData } from "../components/achievements-carousel/achievements-data";
import CoachesCarousel from "../components/coaches-carousel/coaches-carousel";
import { CoachesData } from "../components/coaches-carousel/coaches-data";
import BannerCarousel from "./../components/banners/banner-carousel";
import ClassPreview from "../components/class-preview/class-preview";
import Button from "../components/button/button";
import attending_class_parallax from "../static-images/parallax/class_parallax.jpg";
import online_class_parallax from "../static-images/parallax/online_class_parallax.jpg";
import gallery_parallax from "../static-images/parallax/gallery_parallax.jpg";
import coaches_parallax from "../static-images/parallax/coach_parallax.jpg";
import achivement_parallax from "../static-images/parallax/achievements_parallax.jpg";
import Spinner from "../components/spinner/spinner";
import Message from "./../components/message/message";
import { galleryAction } from "./../store/gallery/gallery-actions";
import { getAttendingClassesListAction } from "./../store/classes-list/attending-classes/classes-list-actions";
import { achievemetnsActions } from "./../store/achievements/achievements-actions";
import { coachesListAction } from "./../store/coaches-list/coaches-list-actions";
import {
  getPrivateOnlineClassesListAction,
  getPublicOnlineClassesListAction,
} from "./../store/classes-list/online-classes/classes-list-actions";

function HomePage() {
  const dispatch = useDispatch();
  const attendingClassesListSelector = useSelector(
    (state) => state.attendingClassesList
  );
  const { error, loading, attending_classes } = attendingClassesListSelector;

  const onlineClassesListSelector = useSelector(
    (state) => state.onlineClassesList
  );

  const { errorCoaches, loadingCoaches, coaches } = useSelector(
    (state) => state.coachesList
  );

  const {
    loading: achievementsLoading,
    error: achievementsError,
    achievements,
  } = useSelector((state) => state.achievements);

  const {
    error: onlineClassesError,
    loading: onlineClassesLoading,
    loading_public,
    error_public,
    online_classes,
  } = onlineClassesListSelector;

  const galleryListSelector = useSelector((state) => state.gallery);

  const {
    error: error_gallery,
    loading: loading_gallery,
    gallery,
  } = galleryListSelector;

  useEffect(() => {
    dispatch(getAttendingClassesListAction(1));
    dispatch(getPrivateOnlineClassesListAction(1));
    dispatch(getPublicOnlineClassesListAction(1));
    dispatch(galleryAction(1));
    dispatch(achievemetnsActions());
    dispatch(coachesListAction(1));
  }, [dispatch]);

  return (
    <div>
      {/* <CarouselBanner /> */}
      <BannerCarousel />

      {/* Attending Classes Preview Section */}
      <ParallaxTitle
        title="کلاس های حضوری"
        image={attending_class_parallax}
      ></ParallaxTitle>

      {loading ? (
        <Spinner />
      ) : error ? (
        <h1>
          <Message type="fail" text={error} />
        </h1>
      ) : (
        <div>
          <ClassPreview data={attending_classes} is_online={false} />
          <Button url="/attending-classes" text="مشاهده همه" />
        </div>
      )}

      {/* Private Online Classes Preview Section */}

      <ParallaxTitle
        title="کلاس های انلاین خصوصی"
        image={online_class_parallax}
      ></ParallaxTitle>
      {onlineClassesLoading ? (
        <Spinner />
      ) : onlineClassesError ? (
        <h1>
          <Message type="fail" text={onlineClassesError} />
        </h1>
      ) : (
        <div>
          <ClassPreview
            data={online_classes.private_online_classes}
            is_online={true}
          />
          <Button url="/private-online-classes" text="مشاهده همه" />
        </div>
      )}

      {/* Public Online Classes Preview Section */}

      <ParallaxTitle
        title="کلاس های انلاین عمومی"
        image={online_class_parallax}
      ></ParallaxTitle>
      {loading_public ? (
        <Spinner />
      ) : error_public ? (
        <h1>
          <Message type="fail" text={error_public} />
        </h1>
      ) : (
        <div>
          <ClassPreview
            data={online_classes.public_online_classes}
            is_online={true}
          />
          <Button url="/public-online-classes" text="مشاهده همه" />
        </div>
      )}

      {/* Gallery Section */}
      <ParallaxTitle title="گالری" image={gallery_parallax}></ParallaxTitle>

      {loading_gallery ? (
        <Spinner />
      ) : error_gallery ? (
        <h1>
          <Message type="fail" text={error_gallery} />
        </h1>
      ) : (
        <div>
          <Gallery
            is_preview={true}
            data={gallery != 0 ? gallery.slice(0, 7) : []}
            filter="all"
          />
          <Button url="/gallery" text="مشاهده همه" />
        </div>
      )}

      {/* Achievements Section */}
      <ParallaxTitle
        title="افتخارات باشگاه"
        image={achivement_parallax}
      ></ParallaxTitle>
      {achievementsLoading ? (
        <Spinner />
      ) : achievementsError ? (
        <Message text={achievementsError} type="fail" />
      ) : (
        <AchievementsCarousel data={achievements} />
      )}

      {/* Coaches Section */}
      <ParallaxTitle title="مربیان" image={coaches_parallax}></ParallaxTitle>

      {loadingCoaches ? (
        <Spinner />
      ) : errorCoaches ? (
        <Message text={errorCoaches} type="fail" />
      ) : (
        <CoachesCarousel data={coaches} />
      )}
    </div>
  );
}

export default HomePage;
