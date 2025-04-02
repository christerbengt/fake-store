import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import logo from "../pictures/logo.png";

function MainMenu({ onFilterChange }) {
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
          
          <div className="logo-container d-flex justify-content-center justify-content-md-start">
            <img src={logo} alt="Faux Finds Logo" className="logo" />
          </div>
          
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
            
            <Link to='/AboutUs' className="btn btn-outline-primary" >
              About Us
            </Link>
          </div>
        </div>
      </div>
      
      <hr className="my-3 my-md-4" style={{ borderColor: "#444" }} />
    </div>
  );
}

export default MainMenu;