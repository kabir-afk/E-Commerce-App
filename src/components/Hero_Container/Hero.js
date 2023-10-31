import React, { useState } from "react";
import "./Hero.css";

function Hero() {
  let [numberOfItems, setNumberOfItems] = useState(0);
  let [prodImg, setProdImg] = useState("images/image-product-1.jpg");
  let [altOfProdImg, setAltOfProdImg] = useState("prod-1");
  function increase() {
    setNumberOfItems(numberOfItems++);
  }
  function decrease() {
    if (numberOfItems === 0) {
      setNumberOfItems(0);
    } else {
      setNumberOfItems(numberOfItems--);
    }
  }
  function changeImage(e) {
    setProdImg(`images/image-product-${e.target.id}.jpg`);
    setAltOfProdImg(`prod-${e.target.id}`);
  }

  function openLightboxGallery() {
    console.log("hello world");
  }
  return (
    <div className="hero-container">
      <div className="overlay">
        <div className="product">
          <img src={prodImg} alt={altOfProdImg} />
        </div>
      </div>
      <div className="sneaker-preview">
        <div className="product" onClick={openLightboxGallery}>
          <img src={prodImg} alt={altOfProdImg} />
        </div>
        <div className="thumbnail-flex">
          <button className="thumbnail">
            <img
              src="images/image-product-1-thumbnail.jpg"
              alt="product-1-thumbnail"
              id="1"
              onClick={changeImage}
            />
          </button>
          <button className="thumbnail">
            <img
              src="images/image-product-2-thumbnail.jpg"
              alt="product-2-thumbnail"
              id="2"
              onClick={changeImage}
            />
          </button>
          <button className="thumbnail">
            <img
              src="images/image-product-3-thumbnail.jpg"
              alt="product-3-thumbnail"
              id="3"
              onClick={changeImage}
            />
          </button>
          <button className="thumbnail">
            <img
              src="images/image-product-4-thumbnail.jpg"
              alt="product-4-thumbnail"
              id="4"
              onClick={changeImage}
            />
          </button>
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
            <button onClick={decrease}>
              <img src="images/icon-minus.svg" alt="minus-icon" />
            </button>{" "}
            {numberOfItems}
            <button onClick={increase}>
              <img src="images/icon-plus.svg" alt="plus-icon" />
            </button>
          </div>
          <button className="addToCart">
            <img src="images/icon-cart.svg" alt="cart-icon" /> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
