import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/checkout.css";
import Button from "../components/ValidationButton.jsx";
import validateFields from "../scripts/validation.js";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

function Checkout() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    streetAddress: "",
    zipCode: "",
    city: "",
  });

  const [errors, setErrors] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const productData = localStorage.getItem("selectedProduct");
    if (productData) {
      setSelectedProduct(JSON.parse(productData));
    }
  }, []);

  const handleInput = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: "" });
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    const validationErrors = validateFields(formData);

    if (validationErrors && Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      navigate("/Thankyou");
    }
  };

  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="container">
        <div className="rubrik">
          <h4 className="rubrik2">Your products</h4>
          <div className="box">
            {selectedProduct ? (
              <div className="selected-product">
                <div className="product-row d-flex align-items-center mb-4">
                  <div
                    className="product-image"
                    style={{ width: "100px", marginRight: "20px" }}
                  >
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.title}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div className="product-details flex-grow-1">
                    <h5>{selectedProduct.title}</h5>
                    <p className="mb-0" style={{ color: "#e0ae50" }}>
                      ${selectedProduct.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-4">
                <p>
                  No product selected. <Link to="/">Return to shop</Link>
                </p>
              </div>
            )}

            <div className="totalt">
              <h4 className="rubrik3">Total price, vat included.</h4>
              <p className="text-end pe-4 fw-bold" style={{ color: "#e0ae50" }}>
                ${selectedProduct ? selectedProduct.price.toFixed(2) : "0.00"}
              </p>
            </div>
          </div>
        </div>

        <div className="rubrik">
          <h4 className="rubrik2">Contact information</h4>
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

                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInput}
                />
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

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

                <div className="buttons">
                  <Button
                    type="button"
                    onClick={handleSubmit}
                    className="btn btn-primary position-relative"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
}

export default Checkout;
