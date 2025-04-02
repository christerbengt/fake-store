import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainMenu from '../components/MainMenu';
import Card from '../components/Card';
import AboutUs from '../pages/AboutUs';
import Checkout from '../pages/Checkout';


function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState({ category: "" });
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState([]);

  // Add Hanken Grotesk font
  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.rel = 'preconnect';
    fontLink.href = 'https://fonts.googleapis.com';
    document.head.appendChild(fontLink);

    const fontLink2 = document.createElement('link');
    fontLink2.rel = 'preconnect';
    fontLink2.href = 'https://fonts.gstatic.com';
    fontLink2.crossOrigin = 'true';
    document.head.appendChild(fontLink2);

    const fontLink3 = document.createElement('link');
    fontLink3.rel = 'stylesheet';
    fontLink3.href = 'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&display=swap';
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
        console.log("API data:", data); // Debug log
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
      filtered = filtered.filter((product) => product.category === filter.category);
    }
    console.log("Filtered products:", filtered); // Debug log
    setFilteredProducts(filtered);
  }, [filter, products]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setShowAboutUs(false);
  };

  const toggleAboutUs = () => {
    setShowAboutUs(!showAboutUs);
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", color: "white" }}>
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container-fluid text-center py-5" style={{ color: "white" }}>
        <h3>Error loading products</h3>
        <p>{error}</p>
        <button className="btn btn-primary" onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    );
  }

  return (

    <div className="container-fluid">
      <MainMenu onFilterChange={handleFilterChange} onAboutUsClick={toggleAboutUs} />

      {showAboutUs ? (
        <AboutUs />
      ) : (
        <div className="container px-4">
          {/* Debug information */}
          <div className="row mb-3">
            <div className="col-12">
              <div className="p-3 text-white">
                <small>Debug: {filteredProducts.length} products loaded</small>
              </div>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-5" style={{ color: "white" }}>
              <h3>No products found</h3>
              <p>Try selecting a different category or refresh the page.</p>
            </div>
          ) : (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              {filteredProducts.map((product) => (
                <div key={product.id} className="col">
                  <Card product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="mt-5 text-center mb-5">
        <Link to="/checkout" className="btn btn-primary">
          Go to Checkout
        </Link>
      </div>
    </div>
  );
}

export default App;