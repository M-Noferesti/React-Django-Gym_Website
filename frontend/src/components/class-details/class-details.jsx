import Banner from "../banners/banner";
import AboutClass from "../about-class/about-class";
import CoachOfClass from "../coach-of-class/coach-of-class";
import { CoachesData } from "../coaches-carousel/coaches-data";
import Schedule from "../schedule/schedule";
import class_details_banner from "../../static-images/banners/class_details_banner.jpg";

function ClassDetails({ data }) {
  console.log(data);
  return (
    <div>
      <Banner
        title="جزئیات کلاس"
        first_parent="کلاس ها"
        second_parent="کلاس های آنلاین عمومی"
        third_parent="بادی پامپ"
        image={class_details_banner}
      />

      <AboutClass title={data.title} description={data.description} />

      <CoachOfClass
        name={data.coach.username}
        resume={data.coach.resume}
        photo={data.coach.photo}
        info1={data.coach.info_1}
        info2={data.coach.info_2}
        info3={data.coach.info_3}
        info4={data.coach.info_4}
        instagram_link={data.coach.instagram_link}
        twitter_link={data.coach.twitter_link}
        facebook_link={data.coach.facebook_link}
      />

      {/* <Schedule /> */}
    </div>
  );
}

export default ClassDetails;
