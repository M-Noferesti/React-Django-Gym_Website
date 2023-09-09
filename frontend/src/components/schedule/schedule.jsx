import React, { useState } from "react";
import { ClassData } from "./data";
import ScheduleItem from "./schedule-item";
import { ScheduleContainer, TabContainer } from "./schedule-styles";

function Schedule() {
  const [activeClass, setActiveClass] = useState(ClassData[0].title);

  const tabHandler = (tab) => {
    setActiveClass(tab);
  };
  return (
    <div>
      <TabContainer>
        {ClassData.map((tab) => (
          <button
            className={
              activeClass === tab.title ? "active tablinks" : "tablinks"
            }
            onClick={(x) => tabHandler(tab.title)}
            key={tab.title}
          >
            {tab.title}
          </button>
        ))}
      </TabContainer>

      {ClassData.map((index) => (
        <div key={index.title}>
          {activeClass === index.title ? (
            <ScheduleContainer id={index.title}>
              <ScheduleItem title="شنبه" index={index} />
              <ScheduleItem title="یکشنبه" index={index} />
              <ScheduleItem title="دوشنبه" index={index} />
              <ScheduleItem title="سه شنبه" index={index} />
              <ScheduleItem title="چهارشنبه" index={index} />
              <ScheduleItem title="پنجشنبه" index={index} />
              <ScheduleItem title="جمعه" index={index} />
            </ScheduleContainer>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default Schedule;
