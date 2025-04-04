import React, { useState, useEffect } from "react";

function CategoryFilter({ categories = [], onFilterChange }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  
  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);
    onFilterChange(newCategory);
  };
  
  return (
    <div className="container-sm py-2">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="d-flex flex-column flex-md-row justify-content-md-end align-items-center gap-2 gap-md-3">
            <select
              className="form-select w-100 mb-2 mb-md-0"
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
          </div>
        </div>
      </div>
      <hr className="my-3 my-md-4" style={{ borderColor: "#444" }} />
    </div>
  );
}

export default CategoryFilter;