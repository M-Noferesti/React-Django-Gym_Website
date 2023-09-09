import React from "react";

function ScheduleItem({ title, index }) {
  return (
    <div>
      {index.schedule.find((x) => x.day === title) ? (
        <div className="schedule">
          <img src={`./images/days of week/${title}.png`} alt="" />
          <h5>
            {index.schedule.find((x) => x.day === title).start_time}-
            {index.schedule.find((x) => x.day === title).end_time}
          </h5>
        </div>
      ) : (
        <div className="schedule">
          <img src={`./images/days of week/${title}.png`} alt="" />
          <h5>تعطیل</h5>
        </div>
      )}
    </div>
  );
}

export default ScheduleItem;
