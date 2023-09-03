import { useSelector, useDispatch } from "react-redux";
import Message from "./../message/message";
import { submitRequestsAction } from "./../../store/enrolment/submit-requests/action";
import { enrolledOnlineClassesAction } from "../../store/enrolment/enrolled_classes/action";
import { enrolledAttendingClassesAction } from "./../../store/enrolment/enrolled_classes/action";
import {
  ButtonContainer,
  RequestedClassesContainer,
} from "./requested-classes-styles";
import RequestedClassesItem from "./requested-classes-item";
import Title from "../profile/titles/title";

function RequestedClasses() {
  const dispatch = useDispatch();
  const submitRequestsSelector = useSelector((state) => state.sumbmitRequests);
  const userInfoSelector = useSelector((state) => state.userLogin);

  const { requestedClasses } = useSelector((state) => state);
  const { success, error } = submitRequestsSelector;
  const { userInfo } = userInfoSelector;

  const openRegistration = () => {
    document.getElementById("login-register").click();
  };

  const submitRequestsData = {
    attending_classes: requestedClasses.attending_classes.map((x) => ({
      id: x.attending_class.id,
      title: x.attending_class.title,
      period: x.period,
      price: x.price,
    })),
    online_classes: requestedClasses.online_classes.map((x) => ({
      id: x.online_class.id,
      title: x.online_class.title,
      period: x.period,
      price: x.price,
    })),
    total_price: requestedClasses.total_price,
    is_paid: true,
  };

  const submitRequestsHandler = async () => {
    try {
      await dispatch(submitRequestsAction(submitRequestsData));
      dispatch({
        type: "RESET_REQUESTS",
      });
    } catch (error) {
      console.log(error);
    }

    dispatch(enrolledOnlineClassesAction());
    dispatch(enrolledAttendingClassesAction());
  };

  return (
    <RequestedClassesContainer>
      {success ? (
        <Message type="success" text="با موفقیت ثبت و پرداخت شد." />
      ) : null}

      {error ? (
        <Message type="fail" text={".مشکلی پیش امده است ،دوباره امتحان کنید"} />
      ) : null}
      {requestedClasses.attending_classes.length > 0 ? (
        <Title text={"کلاس های حضوری"} />
      ) : null}
      {requestedClasses.attending_classes.map((item) => (
        <RequestedClassesItem
          item={item}
          class_={item.attending_class}
          is_online={false}
        />
      ))}
      {requestedClasses.online_classes.length > 0 ? (
        <Title text={"کلاس های انلاین"} />
      ) : null}
      {requestedClasses.online_classes.map((item) => (
        <RequestedClassesItem
          item={item}
          class_={item.online_class}
          is_online={true}
        />
      ))}

      {(requestedClasses.attending_classes.length > 0) |
      (requestedClasses.online_classes.length > 0) ? (
        userInfo ? (
          //   <Button
          //   type="submit"
          //   onClick={() => submitRequestsHandler()}
          //   text="تایید و پرداخت"
          // />
          <ButtonContainer
            type="submit"
            onClick={() => {
              submitRequestsHandler();
            }}
          >
            پرداخت و ثبت نام کلاس ها
          </ButtonContainer>
        ) : (
          <ButtonContainer type="submit" onClick={() => openRegistration()}>
            ثبت نام در سایت و ادامه
          </ButtonContainer>
        )
      ) : (
        <Message text="شما هیچ درخواستی برای ثبت نام ندارید" type="fail" />
      )}
    </RequestedClassesContainer>
  );
}

export default RequestedClasses;
