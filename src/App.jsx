import { useEffect ,useState } from 'react';
import Card from './Card';
import './App.css'
import './AboutUs.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenu from './MainMenu';
import AboutUs from './AboutUs.jsx';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState({ category: "" });

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => setProducts(data))
    .catch((error) => console.log("Error Fetching Data", error));
    
  },[]);

  return (
    <>
      <MainMenu onFilterChange={handleFilterChange} />
      
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col">
            <Card product={product} />
      </div>
        ))}

        <AboutUs></AboutUs>
      </div>
    </>
  );
}

export default App;
