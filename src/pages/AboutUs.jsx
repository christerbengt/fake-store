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
        <h2 className="hero-title">Faux Finds – Har du frågor? Vi har svaren!</h2>

        <div className="content-row">
          <div className="card">
            <div className="card-header">KONTAKT FORMULÄR</div>
            <div className="card-body">
              <h5>Har du frågor?</h5>
              <p>Fyll i formuläret för svar inom 48 timmar.</p>
              <form>
                <input type="text" placeholder="Namn" required />
                <input type="email" placeholder="E-post" required />
                <textarea placeholder="Meddelande" rows="4" required></textarea>
                <button type="submit">Skicka</button>
              </form>
            </div>
          </div>

          <div className="card">
            <div className="card-header">OM OSS</div>
            <div className="card-body">
              <p>
                Vi startade Faux Finds med en enkel idé: att göra det lätt för alla att hitta snygga,
                trendiga och användbara produkter till schyssta priser. Mode, smycken, teknik,
                accessoarer – vi älskar allt som gör vardagen lite roligare och enklare!
                <br /><br />
                Vårt mål? En shoppingupplevelse som är enkel, inspirerande och fylld med fantastiska fynd.
                <br />
                <strong>Dröm det. Köp det. Älska det.</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="content-row">
          <div className="card">
            <div className="card-header">HÄR FINNS VI</div>
            <div className="card-body">
              <p><strong>Adress:</strong> Tomtebodavägen 3A</p>
              <p><strong>Mejl:</strong> FauxFinds@live.com</p>
              <p>Vi tar ej emot returfrågor etc via mejl, endast kontaktformulär.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-header">KARTAN</div>
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