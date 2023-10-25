import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <div className="sneaker-preview">
        <div className="product">
          <img src="images/image-product-1.jpg" alt="prod-1" />
        </div>
        <div className="thumbnail-flex">
          <div className="thumbnail">
            <img
              src="images/image-product-1-thumbnail.jpg"
              alt="product-1-thumbnail"
            />
          </div>
          <div className="thumbnail">
            <img
              src="images/image-product-2-thumbnail.jpg"
              alt="product-2-thumbnail"
            />
          </div>
          <div className="thumbnail">
            <img
              src="images/image-product-3-thumbnail.jpg"
              alt="product-3-thumbnail"
            />
          </div>
          <div className="thumbnail">
            <img
              src="images/image-product-4-thumbnail.jpg"
              alt="product-4-thumbnail"
            />
          </div>
        </div>
      </div>
      <div className="sneaker-description">
        <h5>Sneaker Company</h5>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="price">
          <h2>$125.00</h2> <span className="discount">50%</span>
        </div>
        <s>$250.00</s>
        <div className="flex">
          <div className="numOfItems">
            <button><img src="images/icon-minus.svg" alt="minus-icon" /></button> 0
            <button><img src="images/icon-plus.svg" alt="plus-icon" /></button>
          </div>
          <button className="addToCart"><img src="images/icon-cart.svg" alt="cart-icon"/> Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
