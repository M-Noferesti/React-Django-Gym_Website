import React, { useEffect } from "react";
import AboutUsItem from "../components/about-us/about-us";
import {
  faEnvelope,
  faMapMarked,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Banner from "../components/banners/banner";
import ContactForm from "../components/contact-form/contact-form";
import contact_us_banner from "../static-images/banners/contact_us_banner.jpg";
import { useSelector, useDispatch } from "react-redux";
import { contactAction } from "./../store/contact/contact-actions";
import Spinner from "../components/spinner/spinner";
import Message from "./../components/message/message";

function ContactUsPage() {
  const dispatch = useDispatch();
  const contactSelector = useSelector((state) => state.contact);
  const { error, loading, contact } = contactSelector;

  useEffect(() => {
    dispatch(contactAction());
  }, [dispatch]);

  return (
    <div>
      <Banner
        title="ارتباط با ما"
        first_parent="ارتباط با ما"
        image={contact_us_banner}
      />
      {loading ? (
        <Spinner />
      ) : error ? (
        <h1>
          <Message type="fail" text={error} />
        </h1>
      ) : (
        <div className="row no-gutters">
          <AboutUsItem
            icon={faEnvelope}
            title="ایمیل"
            description={contact.email}
          />

          <AboutUsItem
            icon={faMapMarked}
            title="آدرس باشگاه"
            description={contact.address}
          />

          <AboutUsItem
            icon={faPhone}
            title="تلفن تماس"
            description={"+98 0" + contact.telephone}
          />
        </div>
      )}
      <ContactForm />
    </div>
  );
}

export default ContactUsPage;
