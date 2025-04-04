import React from "react";
import { Link } from "react-router-dom";
import "../styles/AboutUs.css";
 
import Footer from "../components/Footer";
import logo from "../pictures/logo.png";

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Main Content */}
      <div className="main-content">
        <h2 className="hero-title">Faux Finds – Got questions? We've got answers!</h2>

        <div className="content-row">
          <div className="card">
            <div className="card-header">CONTACT FORM</div>
            <div className="card-body">
              <h5>Got questions?</h5>
              <p>Fill out the form for a response within 48 hours.</p>
              <form>
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <textarea placeholder="Message" rows="4" required></textarea>
                <button type="submit">Send</button>
              </form>
            </div>
          </div>

          <div className="card">
            <div className="card-header">ABOUT US</div>
            <div className="card-body">
              <p>
              We started Faux Finds with a simple idea: to make it easy for everyone to find stylish, trendy, and practical products at fair prices. Fashion, jewelry, tech, accessories – we love everything that makes everyday life a little more fun and easier!
              Our goal? A shopping experience that's simple, inspiring, and full of amazing finds.
                <br /><br />
                
                <br />
                <strong>Dream it. Buy it. Love it.</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="content-row">
          <div className="card">
            <div className="card-header">WHERE TO FIND US</div>
            <div className="card-body">
              <p><strong>Adress:</strong> Tomtebodavägen 3A</p>
              <p><strong>Email:</strong> FauxFinds@live.com</p>
              <p>We do not accept return requests etc. via email, only through the contact form.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-header">MAP</div>
            <div className="card-body">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21302.123456!2d18.016500!3d59.350440!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d6a16b2d1d1%3A0x54f2e7e5a7e13f45!2sTomtebodav%C3%A4gen%203A%2C%20171%2065%20Solna!5e0!3m2!1ssv!2sse!4v1614647456789"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <Footer/>
      </div>
    </div>
  );
};

export default AboutUs;