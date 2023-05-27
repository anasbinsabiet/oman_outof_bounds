import React, { useState } from "react";
import {
  faCalendar,
  faGifts,
  faMapSigns,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const HomeContent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState("");
  const [success, setSuccess] = useState("");
  const baseurl = "http://127.0.0.1:5000";

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidationErrors("");
    setSuccess("");
    let payload = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };
    axios
      .post(`${baseurl}/create`, payload)
      .then((r) => {
        setSuccess(r?.message);
      })
      .catch((e) => {
        setValidationErrors(e.message);
      });
  };

  return (
    <>
      <section className="banner_w3lspvt" id="home">
        <div className="csslider infinity" id="slider1">
          <ul style={{ paddingLeft: "0px" }}>
            <li>
              <div className="banner-top">
                <div className="overlay">
                  <div className="container">
                    <div className="w3layouts-banner-info">
                      <h3 className="text-wh">
                        Never let your memories be greater than your dreams.
                      </h3>
                      <h4 className="text-wh">
                        Welcome to Oman Out of Bounds!
                      </h4>
                      <div className="buttons mt-4">
                        <a href="/" className="btn mr-2">
                          About Us
                        </a>
                        <a href="/" className="btn">
                          Book a Tour
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="about py-5">
        <div className="container py-lg-5 py-sm-4">
          <div className="row">
            <div className="col-lg-6 about-left">
              <h3 className="mt-lg-3">
                We will take you to the Top destination in the world,{" "}
                <strong>Explore with us!</strong>
              </h3>
              <p className="mt-4">
                We are a leading online platform for tourism information and
                activities in Oman. We want to help you rediscover the joy of
                travel by bringing all of your destination's sightseeing
                information straight to your mobile device.
              </p>
              <p className="mt-3">
                {" "}
                Donec a arcu et sapien hendrerit accumsan. Pellentesque sit amet
                eros iac, elementum urna ipsum accumsan, iaculis ligula. Aenean
                quam eget maximus in convallis felis dapibus sit amet.
              </p>
            </div>
            <div className="col-lg-6 about-right text-lg-right mt-lg-0 mt-5">
              <img
                src="images/about.jpg"
                alt=""
                className="img-fluid abt-image"
              />
            </div>
          </div>
          <div className="row mt-5 text-center">
            <div className="col-lg-3 col-6">
              <div className="counter">
                <span className="fa fa-smile-o" />
                <div className="timer count-title count-number">1000+</div>
                <p className="count-text text-uppercase">happy customers</p>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="counter">
                <span className="fa fa-ship" />
                <div className="timer count-title count-number">2271</div>
                <p className="count-text text-uppercase">
                  Tours &amp; Travels{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-6 mt-lg-0 mt-5">
              <div className="counter">
                <span className="fa fa-users" />
                <div className="timer count-title count-number">200</div>
                <p className="count-text text-uppercase">destinations</p>
              </div>
            </div>
            <div className="col-lg-3 col-6 mt-lg-0 mt-5">
              <div className="counter">
                <span className="fa fa-gift" />
                <div className="timer count-title count-number">
                  20+<span>years</span>
                </div>
                <p className="count-text text-uppercase">experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="book py-5">
        <div className="container py-lg-5 py-sm-3">
          <h2 className="heading text-capitalize text-center">
            {" "}
            How To Plan Your Trip
          </h2>
          <div className="row mt-5 text-center">
            <div className="col-lg-4 col-sm-6">
              <div className="grid-info">
                <div className="icon">
                  <FontAwesomeIcon icon={faMapSigns} />
                </div>
                <h4>Pick Destination</h4>
                <p className="mt-3">
                  Vestibulum urna ligula, molestie at ante ut, finibus. Integer
                  ultrices finibus sed nisi in convallis sed dolor.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-sm-0 mt-5">
              <div className="grid-info">
                <div className="icon">
                  <FontAwesomeIcon icon={faCalendar} />
                </div>
                <h4>Select Date</h4>
                <p className="mt-3">
                  Vestibulum urna ligula, molestie at ante ut, finibus. Integer
                  ultrices finibus sed nisi in convallis sed dolor.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-lg-0 mt-5">
              <div className="grid-info">
                <div className="icon">
                  <FontAwesomeIcon icon={faGifts} />
                </div>
                <h4>Enjoy the Trip</h4>
                <p className="mt-3">
                  Vestibulum urna ligula, molestie at ante ut, finibus. Integer
                  ultrices finibus sed nisi in convallis sed dolor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="package" className="packages py-5">
        <div className="container py-lg-4 py-sm-3">
          <h3 className="heading text-capitalize text-center">
            {" "}
            Browse Travel Plans
          </h3>
          <p className="text mt-2 mb-5 text-center">
            Vestibulum tellus neque, sodales vel mauris at, rhoncus finibus
            augue. Vestibulum urna ligula, molestie at ante ut, finibus
            vulputate felis.
          </p>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="image-tour position-relative">
                <img src="images/salalah1.jpg" alt="" className="img-fluid" />
              </div>
              <div className="package-info">
                <h6 className="mt-1">Simply Salalah Package</h6>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="image-tour position-relative">
                <img src="images/salalah2.jpg" alt="" className="img-fluid" />
              </div>
              <div className="package-info">
                <h6 className="mt-1">Beautiful Salalah Package</h6>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mt-lg-0 mt-5">
              <div className="image-tour position-relative">
                <img src="images/salalah3.jpg" alt="" className="img-fluid" />
              </div>
              <div className="package-info">
                <h6 className="mt-1">Alluring Salalah Vacation</h6>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mt-lg-0 mt-5">
              <div className="image-tour position-relative">
                <img src="images/salalah4.jpg" alt="" className="img-fluid" />
              </div>
              <div className="package-info">
                <h6 className="mt-1">Stunning Salalah on a Budget</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="text-content">
        <div className="overlay-inner py-5">
          <div className="container py-md-3">
            <div className="test-info">
              <h4 className="tittle">Who we are</h4>
              <p className="mt-3">
                We are a leading online platform for tourism information and
                activities in Oman. We want to help you rediscover the joy of
                travel by bringing all of your destination's sightseeing
                information straight to your mobile device.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="destinations pt-5" id="destinations">
        <div className="container py-xl-5 py-lg-3">
          <h3 className="heading text-capitalize text-center">Things to do</h3>
          <p className="text mt-2 mb-5 text-center">
            Vestibulum tellus neque, sodales vel mauris at, rhoncus finibus
            augue. Vestibulum urna ligula, molestie at ante ut, finibus
            vulputate felis.
          </p>
          <div className="row inner-sec-w3layouts-w3pvt-lauinfo">
            <div className="col-md-3 col-sm-6 col-6 destinations-grids text-center">
              <h4 className="destination mb-3">Muscat</h4>
              <div className="image-position position-relative">
                <img src="images/muscot.jpg" className="img-fluid" alt="" />
              </div>
              <div className="destinations-info">
                <div className="caption mb-lg-3">
                  <h4>Muscat</h4>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-6 destinations-grids text-center">
              <h4 className="destination mb-3">Salalah</h4>
              <div className="image-position position-relative">
                <img src="images/salalah.jpg" className="img-fluid" alt="" />
              </div>
              <div className="destinations-info">
                <div className="caption mb-lg-3">
                  <h4>Salalah</h4>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-6 destinations-grids text-center mt-md-0 mt-4">
              <h4 className="destination mb-3">Nizwa</h4>
              <div className="image-position position-relative">
                <img src="images/nizwa.jpg" className="img-fluid" alt="" />
              </div>
              <div className="destinations-info">
                <div className="caption mb-lg-3">
                  <h4>Nizwa</h4>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-6 destinations-grids text-center mt-md-0 mt-4">
              <h4 className="destination mb-3">Wadi Darbat</h4>
              <div className="image-position position-relative">
                <img src="images/wadi.jpg" className="img-fluid" alt="" />
              </div>
              <div className="destinations-info">
                <div className="caption mb-lg-3">
                  <h4>Wadi Darbat</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-grids py-5">
        <div className="container">
          <h3 className="heading text-capitalize text-center pb-4">
            Contact us
          </h3>
          <div className="row">
            <div className="col-lg-6 col-md-6 contact-left-form my-2 p-5">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className=" form-group contact-forms">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    required="required"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group contact-forms">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required="required"
                  />
                </div>
                <div className="form-group contact-forms">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                    required="required"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group contact-forms">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    rows={3}
                    required="required"
                    defaultValue={""}
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                </div>
                {success && (
                  <div class="form-group contact-forms">
                    <small className="text-primary h6">{success}</small>
                  </div>
                )}
                {validationErrors && (
                  <p className="text-center ">
                    <small className="text-danger h6">{validationErrors}</small>
                  </p>
                )}
                <button type="submit" className="btn btn-block sent-butnn">
                  Send
                </button>
              </form>
            </div>
            <div className="col-lg-6 col-md-6 contact-right pl-lg-5">
              <div className="map p-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122061.52885838857!2d54.03002339566131!3d17.051960638096208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd3df964481c879%3A0xa5e758c7c82eb314!2sSalalah%2C%20Oman!5e0!3m2!1sen!2sbd!4v1684865121783!5m2!1sen!2sbd"
                  width="600"
                  title="map"
                  height="460"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeContent;
