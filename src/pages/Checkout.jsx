import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/checkout.css";

import Button from "../components/ValidationButton.jsx";
import validateFields from "../scripts/validation.js";
import ThankYou from "../pages/Thankyou.jsx";

function Checkout() {
  const [formData, setFormData] = useState( {
    name: '',
    email: '',
    phoneNumber: '',
    streetAddress: '',
    zipCode: '',
    city: ''
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setFormData({ ...formData,  [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: ""})
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateFields(formData);

    if (validationErrors) {
      setErrors(validationErrors);
    } else {
      navigate("/Thankyou");
    }
  };

  return (
    <div>
      <Link className="logo" to="/">
        <img src="pictures/logo.png" alt="Faux Finds logo" />
      </Link>

      <div className="container">
        <div className="header">
          <h1 className="rubrik1">Kassa</h1>
        </div>

        <div className="rubrik">
          <h4 className="rubrik2">1. Dina produkter</h4>
        </div>

        <div className="box">
          <div className="box2">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="totalt">
              <h4 className="rubrik3">Totalt belopp inkl. moms</h4>
            </div>
          </div>
        </div>

        <div className="rubrik">
          <h4 className="rubrik2">2. Dina uppgifter</h4>
        </div>

        <div className="box">
          <div className="box2">
            <form onSubmit={handleSubmit} id="checkout-form" noValidate>
              <div className="form">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInput}
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

                <div className="name-container">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInput}
                  />
                  {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                </div>

                <input
                  type="text"
                  name="streetAddress"
                  placeholder="Street Address"
                  value={formData.streetAddress}
                  onChange={handleInput}
                />
                {errors.streetAddress && (
                  <p style={{ color: "red" }}>{errors.streetAddress}</p>
                )}

                <div className="address-container">
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="Zip Code"
                    value={formData.zipCode}
                    onChange={handleInput}
                  />
                  {errors.zipCode && (
                    <p style={{ color: "red" }}>{errors.zipCode}</p>
                  )}

                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInput}
                  />
                  {errors.city && <p style={{ color: "red" }}>{errors.city}</p>}
                </div>

                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleInput}
                />
                {errors.phoneNumber && (
                  <p style={{ color: "red" }}>{errors.phoneNumber}</p>
                )}
              </div>

              <div className="buttons">
                <Button onClick={handleSubmit}>
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
