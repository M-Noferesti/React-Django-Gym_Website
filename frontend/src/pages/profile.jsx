import React, { useEffect, useState } from "react";
import Banner from "./../components/banners/banner";
import profile_banner from "../static-images/banners/profile banner.jpg";
import ProfileSettings from "../components/profile/profile-settings/profile-settings";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import EnrollmentHistory from "../components/profile/enrollment-history/enrollment-history";
import EnrolledClasses from "../components/profile/enrolled-classes/enrolled-classes";
import { getEnrollmentHistoryAction } from "./../store/enrolment/enrolment-history/action";
import Title from "./../components/profile/titles/title";

function ProfilePage() {
  const userSelector = useSelector((state) => state.userLogin);
  const { userInfo } = userSelector;
  const dispatch = useDispatch();
  const { enrollmentHistory } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getEnrollmentHistoryAction());
  }, [dispatch]);

  if (userInfo == null) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Banner image={profile_banner} title="پروفایل" first_parent="پروفایل" />
      <Title text={"تنظیمات مشخصات کاربری"} />
      <ProfileSettings />
      <Title text={"تاریخچه کلاس های ثبت نام شده"} />
      {enrollmentHistory ? (
        <EnrollmentHistory data={enrollmentHistory} />
      ) : null}
      <EnrolledClasses />
    </div>
  );
}

export default ProfilePage;
