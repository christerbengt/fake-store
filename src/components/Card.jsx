import React from "react";

function Card({ product, onBuyNow }) {
  if (!product) {
    return <div className="simple-card">Product data not available</div>;
  }

  return (
    <div className="simple-card">
      <div className="simple-card-img-container">
        <img
          src={product.image}
          alt={product.title}
          className="simple-product-image"
        />
        
        <div className="simple-card-overlay">
          <h3>{product.title}</h3>
          <p>
            {product.description?.length > 100
              ? `${product.description.substring(0, 100)}...`
              : product.description}
          </p>
        </div>
      </div>

      <div className="simple-card-body">
        <h5 className="simple-card-title" title={product.title}>
          {product.title}
        </h5>
        <p className="simple-card-price">
          ${product.price?.toFixed(2) || "N/A"}
        </p>
        <button
          className="simple-btn-buy"
          onClick={() => onBuyNow(product)}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Card;