import {
  ENROLL_ATTENDING_CLASS,
  DISENROLL_ATTENDING_CLASS,
  SET_PERIOD_ATTENDING_CLASS,
  SYNC_USER_REQUESTS,
} from "./attending-classes/constants";

import {
  ENROLL_ONLINE_CLASS,
  DISENROLL_ONLINE_CLASS,
  SET_PERIOD_ONLINE_CLASS,
} from "./online-classes/constants";
export const enrolmentClassesReducers = (
  state = {
    attending_classes: [],
    online_classes: [],
    total_price: 0,
  },
  action
) => {
  const item = action.payload;
  const attending_classes = state.attending_classes;
  const online_classes = state.online_classes;
  const total_price = state.total_price;
  switch (action.type) {
    case ENROLL_ATTENDING_CLASS:
      if (
        attending_classes.find(
          (index) => item.attending_class.id === index.attending_class.id
        )
      )
        return {
          ...state,
        };
      else
        return {
          online_classes: [...online_classes],

          attending_classes: [...attending_classes, item],
          total_price: total_price + item.price,
        };

    case SET_PERIOD_ATTENDING_CLASS:
      const indexClass = attending_classes.find(
        (index) => item.id === index.attending_class.id
      );
      let perviousAttendingClassPrice = indexClass["price"];
      indexClass["period"] = item.period;
      indexClass["price"] =
        item.period * indexClass.attending_class.monthly_fee;

      let totall = 0;
      for (let i = 0; i < attending_classes.length; i++) {
        totall += attending_classes[i].price;
      }
      if (item.period > 0)
        return {
          ...state,

          attending_classes: attending_classes.map((x) =>
            x.attending_class.id === item.id ? indexClass : x
          ),
          total_price: total_price - perviousAttendingClassPrice + totall,
        };
      else {
        return {
          ...state,

          attending_classes: attending_classes.filter(
            (x) => x.attending_class.id !== item.id
          ),
          total_price: total_price + totall - perviousAttendingClassPrice,
        };
      }

    case DISENROLL_ATTENDING_CLASS:
      const disenrolled_class_index = attending_classes.findIndex(
        (x) => x.attending_class.id == item.id
      );

      return {
        ...state,
        attending_classes: attending_classes.filter(
          (x) => x.attending_class.id !== item.id
        ),
        total_price:
          total_price - attending_classes[disenrolled_class_index].price,
      };

    case SYNC_USER_REQUESTS:
      return {
        attending_classes: item.attending_classes,
        online_classes: item.online_classes,
        total_price: item.total_price,
      };

    case ENROLL_ONLINE_CLASS:
      if (
        online_classes.find(
          (index) => item.online_class.id === index.online_class.id
        )
      )
        return {
          ...state,
        };
      else
        return {
          attending_classes: [...attending_classes],

          online_classes: [...online_classes, item],
          total_price: total_price + item.price,
        };

    case SET_PERIOD_ONLINE_CLASS:
      const indexOnlineClass = online_classes.find(
        (index) => item.id === index.online_class.id
      );
      let perviousPrice = indexOnlineClass["price"];
      let totallOnline = 0;
      indexOnlineClass["period"] = item.period;
      indexOnlineClass["price"] =
        item.period * indexOnlineClass.online_class.monthly_fee;
      for (let i = 0; i < online_classes.length; i++) {
        totallOnline += online_classes[i].price;
      }
      if (item.period > 0)
        return {
          ...state,

          online_classes: online_classes.map((x) =>
            x.online_class.id === item.id ? indexOnlineClass : x
          ),
          total_price: total_price - perviousPrice + totallOnline,
        };
      else {
        return {
          ...state,

          online_classes: online_classes.filter(
            (x) => x.online_class.id !== item.id
          ),
          total_price: totallOnline + total_price - perviousPrice,
        };
      }

    case DISENROLL_ONLINE_CLASS:
      const disenrolled_online_class_index = online_classes.findIndex(
        (x) => x.online_class.id == item.id
      );

      return {
        ...state,
        online_classes: online_classes.filter(
          (x) => x.online_class.id !== item.id
        ),
        total_price:
          total_price - online_classes[disenrolled_online_class_index].price,
      };

    case "RESET_REQUESTS":
      return {
        attending_classes: [],
        online_classes: [],
        total_price: 0,
      };
    default:
      return state;
  }
};
