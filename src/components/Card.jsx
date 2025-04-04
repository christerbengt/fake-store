import React from "react";


function Card({ product }) {
    // Add safety check
    if (!product) {
        console.error("No product data received in Card component");
        return <div className="card h-100 p-3 text-center">Product data not available</div>;
    }

    // Log product for debugging
    console.log("Rendering card for product:", product);
    /*
    return (
      <div className="card h-100 p-3 text-center">
        Product data not available
      </div>
    );
    */
  

  return (
    <div style={{ padding: "5px", height: "100%" }}>
      <div className="card h-100 shadow" style={{ transform: "none" }}>
        <div
          className="card-img-top d-flex justify-content-center align-items-center p-3"
          style={{ height: "200px" }}
        >
          <div className="product-image-container">
            <img
              src={product.image}
              alt={product.title}
              className="product-image img-fluid"
            />
          </div>

          <div className="layer">
            <h3 className="fs-6">{product.title}</h3>
            <p>
              {product.description?.length > 100
                ? `${product.description.substring(0, 100)}...`
                : product.description}
            </p>
          </div>
        </div>

        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-truncate mb-2" title={product.title}>
            {product.title}
          </h5>
          <p className="card-text fw-bold mb-3" style={{ color: "#e0ae50" }}>
            ${product.price?.toFixed(2) || "N/A"}
          </p>

          <button
            className="btn btn-primary mt-auto"
            onClick={() => onBuyNow(product)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}



export default Card;