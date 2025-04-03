import { useState } from 'react'
import validateFields from "../scripts/validation";

function Footer() {
const [email, setEmail] = useState("");
const [error, setError] = useState("");
const [emailSucces, setEmailSucces] = useState(false);

const handleInput = (event) => {
    setEmail(event.target.value);
    console.log(email)
    setError("");
};

const validateEmail = (email) => {
    const emailRegex = /^(?=.{1,50}$)[a-öA-Ö0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;
    console.log("validateEmail reached")
    const result = emailRegex.test(email) ? "" : "Email is invalid";
    console.log(result);
    return result;
  };

const handleSubmit = (event) => {
    if (event) event.preventDefault();

    const validationError = validateEmail(email);
    console.log("validationerror: " + validationError)

    if (validationError.length > 0) {   
        setError(validationError);
      } else {
        setEmailSucces(true);
      }
};

    return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 mx-auto">
            <h4>Media</h4>
            <ul className="list-unstyled">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 mx-auto">
            <h4>Contact</h4>
            <ul className="list-unstyled">
              <li>Map</li>
              <li>Phone</li>
              <li>Email</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 mx-auto">
            <h4>Newsletter</h4>
            {emailSucces ? (
                <p>Thank you for signing up with {email}</p>
            ) : (
                <ul className="list-unstyled">
                <li>Sign up</li>
                <form onSubmit={handleSubmit} id="checkout-form" noValidate>
                <li>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleInput}
                    required
                  />
                  {error && <p style={{ color: "red" }}>{error}</p>}
                </li>
                <li>
                  <button type="button" onClick={handleSubmit} className="btn btn-primary position-relative">
                    Sign Up
                    </button>
                </li>
                </form>
              </ul>
            )}
          </div>
        </div>
        <div className="footer-bottom text-center text-white mt-3">
          <p className="text-xs-center">
            &copy; Copyright {new Date().getFullYear()} - Faux Finds. All right
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
