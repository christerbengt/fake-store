import { useEffect, useState } from 'react';
import Card from './Card.jsx';
import './App.css'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log("Error Fetching Data", error));

  }, []);

  return (
    <div className="main-div">
      <h1 className="title">Fake Store Products</h1>
      <div className="card-box">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App
