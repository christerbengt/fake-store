import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex bg-dark text-white">
      {/* Vänster sidebar */}
      <div className="col-3 p-4 d-flex flex-column">
        <div>
          <img src="faux_finds_logo.png" alt="Faux Finds Logo" className="img-fluid mb-3" />
          <h1 className="fw-bold">Om oss</h1>
        </div>
        
        <div className="mt-4">
          <div className="mb-3"><a href="#" className="text-white text-decoration-none">About us</a></div>
          <div className="mb-3"><a href="#" className="text-white text-decoration-none">Om oss</a></div>
          <div className="mb-3"><a href="#" className="text-white text-decoration-none">Här finns vi</a></div>
          <div className="mb-3"><a href="#" className="text-white text-decoration-none">Kartan</a></div>
        </div>

        {/* Sociala Medier längst ner i vänstra hörnet */}
        <div className="mt-auto">
          <div className="mb-2">Sociala Medier</div>
          <div className="d-flex gap-2">
            <a href="#" className="btn btn-warning btn-sm">Facebook</a>
            <a href="#" className="btn btn-warning btn-sm">Instagram</a>
            <a href="#" className="btn btn-warning btn-sm">Twitter</a>
          </div>
        </div>
      </div>

      {/* Huvudinnehåll */}
      <div className="col-9 d-flex flex-column align-items-center justify-content-center">
        {/* Kontaktformulär och Om Oss */}
        <div className="row w-75 mb-4">
          {/* Kontaktformulär */}
          <div className="col-md-6">
            <div className="card bg-dark text-light p-4 shadow-lg w-100">
              <div className="card-header text-center">KONTAKT FORMULÄR</div>
              <div className="card-body">
                <h5 className="card-title text-center">Har du frågor?</h5>
                <p className="card-text text-center">Fyll i formuläret för svar inom 48 timmar.</p>
                <form>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Namn" required />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder="E-post" required />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control" placeholder="Meddelande" rows="4" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-warning w-100">Skicka</button>
                </form>
              </div>
            </div>
          </div>

          {/* Om Oss */}
          <div className="col-md-6">
            <div className="card bg-dark text-light p-4 shadow-lg w-100">
              <div className="card-header text-center">OM OSS</div>
              <div className="card-body text-center">
                <p>
                  Vi startade Faux Finds med en enkel idé: att göra det lätt för alla att hitta snygga,
                  trendiga och användbara produkter till schyssta priser. Mode, smycken, teknik,
                  accessoarer – vi älskar allt som gör vardagen lite roligare och enklare!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Kartan - Justerad till en mer rektangulär form */}
        <div className="w-50 mb-4"> {/* Justerat bredden till 50% för mer rektangulär form */}
          <div className="card bg-dark text-light p-4 shadow-lg w-100">
            <div className="card-header text-center">KARTAN</div>
            <div className="card-body text-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21302.123456!2d18.016500!3d59.350440!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d6a16b2d1d1%3A0x54f2e7e5a7e13f45!2sTomtebodav%C3%A4gen%203A%2C%20171%2065%20Solna!5e0!3m2!1ssv!2sse!4v1614647456789"
                width="100%"
                height="400"  // Höjt höjden för att göra den mer kvadratisk
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;