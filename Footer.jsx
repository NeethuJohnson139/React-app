import React from "react";
import "./footer.css";
import LOGO from "../../assets/logos/logo.png";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer-container">
        <div className="row1">
          <div className="col1">
            <h3 className="footer-title">
              <span class="underline">Address </span>
            </h3>
            <ul className="footer-text">
              <li>Brantford</li>
              <li>276 Colbrone Street</li>
              <li>N3T 2L3</li>
              <li>Ontario, Canada</li>
            </ul>
          </div>

          <div className="col2">
            <h3 className="footer-title">
              <span class="underline">Quick links</span>
            </h3>
            <ul className="footer-text">
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/classes">Classes</a>
              </li>
              <li>
                <a href="/pricing">Membership</a>
              </li>

              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row2">
          <div className="col3">
          <h3 className="footer-title">
              <span class="underline">Timing</span>
            </h3>
            <ul className="footer-text">
              <li>9:00 PM to 11 PM</li>
            </ul>
          </div>
        </div>

        <div className="row3">
          <div className="col4">
            <h3 className="footer-title">
              <span class="underline">Get in touch</span>
            </h3>
            <ul className="footer-text">
              <li>info@Group_15.com</li>
              <li>+123 456 789 000</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
