import React, { useState, useEffect } from "react";

function MainMenu({ onFilterChange, onAboutUsClick }) {
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
      <div className="row align-items-center">
        <div className="col-12 col-md-6">
          <h1 className="mb-3 mb-md-0" style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: "700" }}>Faux Finds</h1>
        </div>
        <div className="col-12 col-md-6">
          <div className="d-flex flex-column flex-md-row justify-content-md-end align-items-center gap-3">
            <select
              className="form-select w-100 w-md-auto"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
            
            <button onClick={onAboutUsClick} className="btn btn-outline-primary w-100 w-md-auto mt-2 mt-md-0">
              About Us
            </button>
          </div>
        </div>
      </div>
      
      <hr className="my-4" style={{ borderColor: "#444" }} />
    </div>
  );
}

export default MainMenu;