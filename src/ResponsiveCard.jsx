import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importerar Bootstrap

function ResponsiveCard({ product }) {
  return (
    <div className="card text-center mx-auto" style={{ maxWidth: "250px" }}>
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text text-success">${product.price}</p>
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
}

export default ResponsiveCard;