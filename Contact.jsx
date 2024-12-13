import React from "react";
import "./contact.css";
import Footer from "../footer/Footer";
import LOCATION_CYAN from "../../assets/logos/location-cyan.png";
import PHONE_CYAN from "../../assets/logos/phone-cyan.png";
import EMAIL_CYAN from "../../assets/logos/email-cyan.png";
import CLOCK_CYAN from "../../assets/logos/clock-cyan.png";

import CHEVRON from "../../assets/logos/chevron-up.png";
import classNames from "classnames";

// Opinder Singh

const contactData = [
  {
    name: "John",
    role: "manager",
    description: "I am John.",
    gender: "male",
  },
  {
    name: "Neethu",
    role: "fitness coach",
    description: "I am Neethu.",
    gender: "female",
  },
  {
    name: "Greg",
    role: "fitness coach",
    description: "I am greg.",
    gender: "male",
  },
  {
    name: "Clara",
    role: "fitness coach",
    description: "I am Clara",
    gender: "female",
  },
  {
    name: "Leo",
    role: "boxing coach",
    description: "I am leo",
    gender: "male",
  },
  {
    name: "Mariana",
    role: "boxing coach",
    description: "I am Mariana",
    gender: "female",
  },
];

const Contact = () => {
  return (
    <div className="container">
      <section id="contact">
        <h1 className="contact-title">Reach out to us!</h1>
        <div className="contact-container">
          <div className="contact-brantford">
            <h2>Brantford gym</h2>
            <ul>
              <li>
                <img src={LOCATION_CYAN} alt="" />
                276 Colbrone Street
              </li>
              <li>
                <img src={PHONE_CYAN} alt="" />
                +123 456 789 000
              </li>
              <li>
                <img src={EMAIL_CYAN} alt="" />
                info@Group_15.com
              </li>
              <li>
                <img src={CLOCK_CYAN} alt="" />
                9.00 AM to 11 PM
              </li>
            </ul>
          </div>

          <form action="" onSubmit="">
            <div className="contact-form-bg">
              <div className="contact-form">
                <div className="first-row">
                  <div className="name">
                    <p className="input-text">Full name</p>
                    <input type="text" name="fullName" required />
                  </div>

                  <div className="email">
                    <p className="input-text">Email</p>
                    <input type="text" name="email" required />
                  </div>
                  <div className="message"></div>
                </div>
                <div className="second-row">
                  <p className="input-text">Your message</p>
                  <textarea
                    clasname="message"
                    name="message"
                    id=""
                    rows="8"
                    required
                  ></textarea>
                </div>
                <button className="send-btn">Send</button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section id="team">
        <h1 className="team-title">Meet the team</h1>
        <div className="team-container">
          {contactData.map(({ name, role, description, gender }, index) => {
            const className_name = classNames({
              john: name === "John",
              Neethu: name === "Neethu",
              greg: name === "Greg",
              clara: name === "Clara",
              leo: name === "Leo",
              mariana: name === "Mariana",
            });

            return (
              <div
                key={index}
                className={`team-card ${
                  gender === "male" ? "male" : "female"
                } ${className_name}`}
              >
                <h3 className="role">{role}</h3>
                <div class="content-box">
                  <img src={CHEVRON} className="chevron" alt="chevron"></img>
                  <h2 className="name">{name}</h2>
                  <div class="description-box">
                    <p className="description">{description}</p>
                  </div>
                  <a href="/">Book a lesson</a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
