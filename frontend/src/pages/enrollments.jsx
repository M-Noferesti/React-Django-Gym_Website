import React, { useEffect } from "react";
import requests_banner from "../static-images/banners/requests_banner.jpg";
import Banner from "./../components/banners/banner";
import RequestedClasses from "./../components/requested-classes/requested-classes";
import { useDispatch } from "react-redux";

function EnrollmentsPage() {
  // useEffect(() => {});
  return (
    <div>
      <Banner
        title="درخواست ها"
        first_parent="درخواست ها"
        image={requests_banner}
      />
      <RequestedClasses />
    </div>
  );
}

export default EnrollmentsPage;
