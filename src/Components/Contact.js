import React from "react";
import "./Contact.css";
import Footbar from "./Footbar";
import Navbar from "./Navbar";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="contact-me">
        <div className="title">
          <h2>Get in Touch</h2>
        </div>
        <div className="box">
          <div className="contact form">
            <h3>Send a Message</h3>
            <form id="my-form">
              <div className="form-box">
                <div className="row50">
                  <div className="input-box">
                    <span>First Name</span>
                    <input type="text" placeholder="First Name" required />
                  </div>
                  <div className="input-box">
                    <span>Last Name</span>
                    <input type="text" placeholder="Last Name" required />
                  </div>
                </div>

                <div className="row50">
                  <div className="input-box">
                    <span>Email</span>
                    <input type="email" placeholder="Email Address" required />
                  </div>
                  <div className="input-box">
                    <span>Mobile</span>
                    <input type="number" placeholder="Mobile Number" required />
                  </div>
                </div>

                <div className="row100">
                  <div className="input-box">
                    <span>Message</span>
                    <textarea
                      placeholder="Write your message here...."
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="row100">
                  <div className="input-box">
                    <input type="submit" value="Send" />
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="contact info">
            <h3>Contact Info</h3>
            <div className="info-box">
              <div>
                <span>
                  <ion-icon name="location"></ion-icon>
                </span>
                <p>
                  Ambapua, Berhampur <br />
                  760007, ODISHA
                </p>
              </div>
              <div>
                <span>
                  <ion-icon name="mail"></ion-icon>
                </span>
                <a href="mailto:ssrath38@gmail.com">ssrath38@gmail.com</a>
              </div>
              <div>
                <span>
                  <ion-icon name="call"></ion-icon>
                </span>
                <a href="tel:+917894655185">+91 7894655185</a>
                <a href="tel:+917847038595">+91 7847038595</a>
              </div>
              <div>
                <span>
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </span>
                <a href="https://wa.me/917894655185">+91 7894655185</a>
              </div>
            </div>
          </div>

          <div className="contact map">
            <iframe
              title="s"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10649.454413672423!2d84.84412970685091!3d19.319265197164356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d50ae2d339c8b%3A0xe4c5fb85dfe27dd0!2sAmbapua%2C%20Bima%20Nagar%2C%20Dura%20Bahadurpetta%2C%20Odisha%20760010!5e0!3m2!1sen!2sin!4v1661249740582!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <span className="menu-icon" id="toggle" onclick="menuToggle()"></span>
      <Footbar />
    </div>
  );
}

export default Contact;
