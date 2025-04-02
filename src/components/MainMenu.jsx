import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function MainMenu({ onFilterChange, onAboutUsClick }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch categories");
        return res.json();
      })
      .then((data) => {
        setCategories(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setIsLoading(false);
      });
     }, []);

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);
    onFilterChange({ category: newCategory });
  };
  
  return (
    <div className="container py-3 py-md-4">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <h1 className="text-center text-md-start" style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: "700" }}>
            Faux Finds
            </h1>
        </div>
        <div className="col-12 col-md-6">
          <div className="d-flex flex-column flex-md-row justify-content-md-end align-items-center gap-2 gap-md-3">
            <select
              className="form-select w-100 mb-2 mb-md-0"
              value={selectedCategory}
              onChange={handleCategoryChange}
              disabled={isLoading}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
            
            <button
              onClick={onAboutUsClick} 
              className="btn btn-outline-primary w-100"
              disabled={isLoading}
            >
              About Us
            </button>
          </div>
        </div>
      </div>
      
      <hr className="my-3 my-md-4" style={{ borderColor: "#444" }} />
    </div>
  );
}

export default MainMenu;