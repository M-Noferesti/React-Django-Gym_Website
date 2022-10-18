import React from "react";
import OnlineClassCard from "./../class-card/online-class-card";
import AttendingClassCard from "./../class-card/attending-class-card";

function ClassPreview({ data, is_online }) {
  return (
    <div className="row no-gutters my-4">
      {data.slice(0, 3).map((index) => (
        <div className="col-md-4" key={index.id}>
          {is_online ? (
            <OnlineClassCard
              image={index.image}
              title={index.title}
              workoutType={index.workoutType}
              monthly_fee={index.monthly_fee}
              registered={index.registered}
              id={index.id}
              key={index.id}
              is_public={index.is_public}
            />
          ) : (
            <AttendingClassCard
              image={index.image}
              title={index.title}
              workoutType={index.workoutType}
              monthly_fee={index.monthly_fee}
              registered={index.registered}
              id={index.id}
              key={index.id}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default ClassPreview;
