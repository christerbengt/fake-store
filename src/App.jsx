import { useEffect, useState } from "react";
import Card from "./Card";
import MainMenu from "./MainMenu";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState({ category: "" });

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error Fetching Data", error);
        setLoading(false);
      });
  }, []);

        //Byte av visade kategorier av produkter
  useEffect(() => {
    let filtered = [...products];

    if (filter.category) {
      filtered = filtered.filter((product) => product.category === filter.category);
    }
    setFilteredProducts(filtered);
  }, [filter, products]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <MainMenu onFilterChange={handleFilterChange} />
      
      
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col">
            <Card product={product} />
      </div>
        ))}
      </div>
    </>
  );
}

export default App;
