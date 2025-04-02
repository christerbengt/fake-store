import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MainMenu from "../components/MainMenu";
import Card from "../components/Card";
import AboutUs from "../pages/AboutUs";
import Checkout from "../pages/Checkout";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState({ category: "" });
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  // Add Hanken Grotesk font
  useEffect(() => {
    const fontLink = document.createElement("link");
    fontLink.rel = "preconnect";
    fontLink.href = "https://fonts.googleapis.com";
    document.head.appendChild(fontLink);

    const fontLink2 = document.createElement("link");
    fontLink2.rel = "preconnect";
    fontLink2.href = "https://fonts.gstatic.com";
    fontLink2.crossOrigin = "true";
    document.head.appendChild(fontLink2);

    const fontLink3 = document.createElement("link");
    fontLink3.rel = "stylesheet";
    fontLink3.href =
      "https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&display=swap";
    document.head.appendChild(fontLink3);

    // Cleanup function
    return () => {
      document.head.removeChild(fontLink);
      document.head.removeChild(fontLink2);
      document.head.removeChild(fontLink3);
    };
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error Fetching Data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Filter products by category
  useEffect(() => {
    let filtered = [...products];

    if (filter.category) {
      filtered = filtered.filter(
        (product) => product.category === filter.category
      );
    }
    setFilteredProducts(filtered);
  }, [filter, products]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setShowAboutUs(false);
  };

  const toggleAboutUs = () => {
    setShowAboutUs(!showAboutUs);
  };

  // Function to handle product selection
  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    // Store the selected product in localStorage so it can be accessed from the Checkout page
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    // Navigate to checkout
    navigate("/checkout");
  };

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container text-center py-5">
        <h3>Error loading products</h3>
        <p>{error}</p>
        <button
          className="btn btn-primary"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="container-fluid px-0">
      <MainMenu
        onFilterChange={handleFilterChange}
        onAboutUsClick={toggleAboutUs}
      />
      <div className="container py-4">
        {filteredProducts.length === 0 ? (
          <div className="row">
            <div className="col-12 text-center py-5">
              <h3>No products found</h3>
              <p>Try selecting a different category or refresh the page.</p>
            </div>
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="col mb-4 d-flex">
                <Card product={product} onBuyNow={handleProductSelect} />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center py-4">
            <Link
              to="/checkout"
              className="btn btn-primary btn-lg"
              style={{ maxWidth: "300px" }}
            >
              Go to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
