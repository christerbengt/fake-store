import React, { useState, useEffect } from "react";

function MainMenu({ onFilterChange }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);


  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);
    onFilterChange({ category: newCategory });
  };


  
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Fake Store Products</h1>

      <div className="d-flex justify-content-between align-items-center mb-4">
           
           {/* "drop-down" meny för kategorierna  */}
        <select
          className="form-select"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Alla kategorier</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <a href="/about" className="btn btn-link">
        About Us
      </a>
    </div>
  );
}

export default MainMenu;
