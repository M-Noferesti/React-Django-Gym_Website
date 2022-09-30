import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import classDetailsReducers from "./class-details/attending-classes/class-details-reducers";
import { userLoginReducers } from "./user-login/user-login-reducers";
import { userRegisterReducers } from "./user-register/user-register-reducers";
import { userDetailsReducers } from "./user-details/user-details-reducers";
import { userDetailsUpdateReducers } from "./user-details-update/reducers";
import { checkTokenValidationMiddleware } from "./middlewares/check-token-validation";
import coachesListReducers from "./coaches-list/coaches-list-reducers";
import galleryReducers from "./gallery/gallery-reducers";
import contactReducers from "./contact/contact-reducers";
import sendEmailReducers from "./contact/send-email/send-email-reducers";
import { enrolledClassesReducers } from "./enrolment/enrolled_classes/reducers";
import { enrollmentHistoryReducers } from "./enrolment/enrolment-history/reducers";
import { submitRequestsReducers } from "./enrolment/submit-requests/reducers";
import attendingClassesListReducers from "./classes-list/attending-classes/classes-list-reducers";
import onlineClassesListReducers from "./classes-list/online-classes/classes-list-reducers";
import { enrolmentClassesReducers } from "./enrolment/enrolment-requests/reduceres";
import { renewalClassesReducers } from "./enrolment/renewal-enrolled-classes/reducers";
import { achievementsReducers } from "./achievements/achievements-reducers";
import onlineClassDetailsReducers from "./class-details/online-classes/class-details-reducers";

const reducer = combineReducers({
  attendingClassesList: attendingClassesListReducers,
  onlineClassesList: onlineClassesListReducers,
  classDetails: classDetailsReducers,
  onlineClassDetails: onlineClassDetailsReducers,
  coachesList: coachesListReducers,
  gallery: galleryReducers,
  achievements: achievementsReducers,
  contact: contactReducers,
  sendEmail: sendEmailReducers,
  requestedClasses: enrolmentClassesReducers,
  sumbmitRequests: submitRequestsReducers,
  enrolledClasses: enrolledClassesReducers,
  renewalState: renewalClassesReducers,
  enrollmentHistory: enrollmentHistoryReducers,
  userLogin: userLoginReducers,
  userRegister: userRegisterReducers,
  userDetails: userDetailsReducers,
  userDetailsUpdate: userDetailsUpdateReducers,
});

const requestedClassesInStorage = localStorage.getItem("requestedClasses")
  ? JSON.parse(localStorage.getItem("requestedClasses"))
  : {
      attending_classes: [],
      online_classes: [],
      total_price: 0,
    };

const userInfoInStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const enrolledClassesInStorage = localStorage.getItem("enrolledClasses")
  ? JSON.parse(localStorage.getItem("enrolledClasses"))
  : {
      attending_classes: [],
      online_classes: [],
    };

const enrollmentHistoryInStorage = localStorage.getItem("enrollmentHistory")
  ? JSON.parse(localStorage.getItem("enrollmentHistory"))
  : null;

const initialState = {
  requestedClasses: {
    ...requestedClassesInStorage,
  },
  userLogin: { userInfo: userInfoInStorage },
  enrolledClasses: {
    ...enrolledClassesInStorage,
  },
  enrollmentHistory: enrollmentHistoryInStorage,
};

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunk, checkTokenValidationMiddleware)
);

export default store;
