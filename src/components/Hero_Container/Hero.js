import React, { useState } from "react";
import "./Hero.css";

function Hero(props) {
  let [numberOfItems, setNumberOfItems] = useState(0);
  let [prodImg, setProdImg] = useState("images/image-product-1.jpg");
  let [altOfProdImg, setAltOfProdImg] = useState("prod-1");
  let [counter, setCounter] = useState(0);
  let [hide, setHide] = useState("hide");

  const lightboxProducts = document.querySelectorAll(".lightbox-product");

  function increase() {
    setNumberOfItems(numberOfItems + 1);
  }
  function decrease() {
    if (numberOfItems === 0) {
      setNumberOfItems(0);
    } else {
      setNumberOfItems(numberOfItems - 1);
    }
  }
  function changeImage(e) {
    setProdImg(`images/image-product-${e.target.id}.jpg`);
    setAltOfProdImg(`prod-${e.target.id}`);
  }

  function openLightboxGallery() {
    setHide("unhide");
  }
  function closeLightboxGallery() {
    setHide("hide");
  }
  function slideImage() {
    lightboxProducts.forEach((lightboxProduct) => {
      lightboxProduct.style.transform = `translateX(-${counter * 100}%)`;
    });
  }
  function nextImage() {
    setCounter(counter + 1);
    if (counter === 4) {
      setCounter(0);
    } else {
      slideImage();
    }
  }
  function previousImage() {
    setCounter(counter - 1);
    if (counter === -1) {
      setCounter(3);
    } else {
      slideImage();
    }
  }
  return (
    <div className="hero-container">
      <div className={`overlay ${hide}`}>
        <div className="lightbox-flex">
        <img
          src="images/icon-close.svg"
          alt="cross-icon"
          onClick={closeLightboxGallery}
        />
          <button onClick={previousImage}>
            <img src="images/icon-previous.svg" alt="previous-icon" />
          </button>
          <div className="product-container">
            <div className="lightbox-product">
              <img src="images/image-product-1.jpg" alt="prod-1" />
            </div>
            <div className="lightbox-product">
              <img src="images/image-product-2.jpg" alt="prod-2" />
            </div>
            <div className="lightbox-product">
              <img src="images/image-product-3.jpg" alt="prod-3" />
            </div>
            <div className="lightbox-product">
              <img src="images/image-product-4.jpg" alt="prod-4" />
            </div>
          </div>
          <button onClick={nextImage}>
            <img src="images/icon-next.svg" alt="next-icon" />
          </button>
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
          <button
            className="addToCart"
            onClick={() => props.addToCart({ numberOfItems })}
          >
            <img src="images/icon-cart.svg" alt="cart-icon" /> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
