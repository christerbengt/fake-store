import React from "react";

function Card({product}) {
    return(
    <div className="card">
        <img
            src={product.image}
            alt={product.title}
            className=""
        ></img>
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price"> ${product.price} </p>
        <button className="button-buy-now">
            Buy Now
        </button>
    </div>
    );
}

export default Card