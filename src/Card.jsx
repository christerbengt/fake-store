import React from "react";

function Card({product}) {
    return(
        <div className="card h-100">
            <div className="card-img-top d-flex justify-content-center align-items-center p-3 bg-light" style={{ height: "200px" }}>
                <img
                    src={product.image}
                    alt={product.title}
                    style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
                />
            </div>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title" style={{ overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
                    {product.title}
                </h5>
                <p className="card-text text-success fw-bold">${product.price}</p>
                <button className="btn btn-primary mt-auto">
                    Buy Now
                </button>
            </div>
        </div>
    );
}

export default Card;