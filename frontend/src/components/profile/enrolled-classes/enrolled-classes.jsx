import React from "react";
import { useSelector } from "react-redux";
import { EnrolledClassesContianer } from "./enrolled-classes-styles";
import EnrolledClassesItem from "./enrolled-classes-item";
import Title from "./../titles/title";

function EnrolledClasses() {
  const { enrolledClasses } = useSelector((state) => state);

  return (
    <div>
      <Title text={"کلاس های حضوری ثبت نام شده"} />
      <EnrolledClassesContianer>
        {enrolledClasses.attending_classes.map((x) => (
          <EnrolledClassesItem data={x} key={x.attending_class.id} />
        ))}
      </EnrolledClassesContianer>

      <Title text={"کلاس های انلاین ثبت نام شده"} />
      <EnrolledClassesContianer>
        {enrolledClasses.online_classes.map((x) => (
          <EnrolledClassesItem data={x} key={x.online_class.id} />
        ))}
      </EnrolledClassesContianer>
    </div>
  );
}

export default EnrolledClasses;
