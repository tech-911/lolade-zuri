import React, { useState } from "react";
import "./contact.css";
import Footer from "../../components/Footer";

const contact = () => {
  const [name, setName] = useState("Ololade Olatunji");
  return (
    <div id="contact-page">
      <div className="container">
        <div className="header">
          <h1 className="co-me">Contact Me</h1>
          <p className="sub">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </div>

        <form className="form-section">
          <div className="form-inline">
            <div className="firstname">
              <label className="firstname-label" for="first_name">
                First name
              </label>
              <input
                className="firstname-input"
                type="text"
                id="first_name"
                placeholder="Enter your first name"
                required
              />
            </div>

            <div className="lastname">
              <label className="lastname-label" for="last_name">
                Last name
              </label>
              <input
                className="lastname-input"
                type="text"
                id="last_name"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          <div className="email">
            <label className="email-label" for="email">
              Email
            </label>
            <input
              className="email-input"
              type="email"
              id="email"
              placeholder="yourname@email.com"
              required
            />
          </div>

          <div className="message">
            <label className="message-label" for="Meesage" id="message">
              Message
            </label>
            <textarea
              name="Message"
              rows="6"
              id="message"
              placeholder="Send me a message and I'll reply you as soon as possible"
            />
          </div>

          <div className="checkbox">
            <input type="checkbox" />
            <span className="span">
              {`You agree to providing your data to ${name} who may contact you.`}
            </span>
          </div>

          <button type="submit" id="btn__submit" className="submit">
            Send message
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default contact;
