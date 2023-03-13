import axios from "axios";
import React, { useState } from "react";
import "./contactStyle.css";
const Contact = () => {
  const [email, setEmail] = useState({});
  const [state, setState] = useState("");
  let handleChange = (e) => {
    let { name, value } = e.target;
    setEmail((oldDate) => ({ ...oldDate, [name]: value }));
    // console.log(email)
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://ecocharge-backend-3ms8.onrender.com/api/email/sendEmail`, email)
      .then((res) => {
        if (res.data.message === "success email") {
          setState(" Email sended successfully ");
          setEmail({ name: "", email: "", subject: "", message: "" });
        } else {
          setState(res.data.message);
        }
      });
  };
  return (
    <section
      id="CONTACT"
      className="contact"
      style={{ backgroundImage: "url('./images/2.jpeg')" }}
    >
      <div className="contact-layer py-5">
        <div className="container bg-white ">
          <div className="row">
            <div className="col-md-6 col-sm-12 pl-5 py-5">
              <h2 className="pt-5 contact-h">Send Message Us</h2>
              <form className="pt-5" onSubmit={handleSubmit}>
                <div className="form-group mt-2">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Your Name"
                    value={email.name}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="form-group mt-2 ">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Your Email"
                    onChange={handleChange}
                    value={email.email}
                  ></input>
                </div>
                <div className="form-group mt-2">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Subject"
                    onChange={handleChange}
                    value={email.subject}
                  ></input>
                </div>

                <div className="form-group mt-2">
                  <textarea
                    className="form-control"
                    name="message"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    placeholder="Message"
                    onChange={handleChange}
                    value={email.message}
                  ></textarea>
                </div>
                <div className="text-success text-center mt-1">
                  {{ state } ? <h4>{state}</h4> : ""}
                </div>
                <div className="pt-1 pb-5 d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg sendBtn "
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6 col-sm-12 py-5  ">
              <h2 className="pt-5 contact-h">Get in Touch</h2>
              <p className="lead pt-5">
                EcoCharge is a website that provides service to all stations in
                Egypt. If you want to contact us, send us a message via gmail,
                Facebook or YouTube.
              </p>
              <ul className="list-contact">
                <li className="pt-2">
                  <span>
                    <i className="fas fa-map-marker-alt pr-1 contact-icon"></i>
                  </span>
                  ITI Cairo University Branch
                </li>
                <li className="pt-2">
                  <span>
                    <i className="fas fa-mobile-alt pr-2 contact-icon"></i>
                  </span>
                  (617) 557-0089
                </li>
                <li className="pt-2">
                  <span>
                    <i className="far fa-envelope pr-2 contact-icon"></i>
                  </span>
                  EcoCharge.ITI@gmail.com
                </li>
              </ul>
              <div className="social-panal d-flex text-left">
                <div className="icons m-2 ml-0 d-flex justify-content-center align-items-center rounded-circle ">
                  <i className=" fab fa-facebook-f iPrand  "></i>
                </div>
                <div className="icons m-2 d-flex justify-content-center align-items-center rounded-circle ">
                  <i className=" fab fa-twitter iPrand "></i>
                </div>
                <div className="icons m-2 d-flex justify-content-center align-items-center rounded-circle ">
                  <i className=" fab fa-instagram iPrand "></i>
                </div>
                <div className="icons m-2 d-flex justify-content-center align-items-center rounded-circle">
                  <i className=" fab fa-spotify iPrand "></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
