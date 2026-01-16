import { useEffect, useState } from "react";
import "./Hero.css";
import LightBox from "./LightBox";

function Hero(props) {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [imgIndex, setImgIndex] = useState(1);
  const [lightBoxImgIndex, setLightBoxImgIndex] = useState(1);
  const [visible, setVisible] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    setVisible((prev) => {
      if (screenWidth <= 775 && prev === true) {
        return false;
      }
    });
  }, [screenWidth]);
  return (
    <div className="hero-container">
      {visible && (
        <LightBox
          hideLightBox={() => setVisible(false)}
          index={lightBoxImgIndex}
        />
      )}

      <div className="sneaker-flex">
        <button
          onClick={() =>
            setImgIndex((prev) => {
              if (prev === 1) {
                return 4;
              }
              return prev - 1;
            })
          }
        >
          <img src="/images/icon-previous.svg" alt="previous-icon" />
        </button>
        <button
          onClick={() =>
            setImgIndex((prev) => {
              if (prev === 4) {
                return 1;
              }
              return prev + 1;
            })
          }
        >
          <img src="/images/icon-next.svg" alt="next-icon" />
        </button>
        <div className="product-container">
          {Array.from({ length: 4 }, (index) => (
            <div className="lightbox-product" key={index}>
              <img
                src={`images/image-product-${imgIndex}.jpg`}
                alt={`prod-${imgIndex}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="sneaker-preview">
        <div className="product" onClick={() => setVisible(true)}>
          <img
            src={`/images/image-product-${imgIndex}.jpg`}
            alt={`prod-${imgIndex}`}
          />
        </div>
        <div className="thumbnail-flex">
          {Array.from({ length: 4 }, (_, index) => (
            <button className="thumbnail" key={index}>
              <img
                src={`/images/image-product-${index + 1}-thumbnail.jpg`}
                alt={`product-${index + 1}-thumbnail`}
                id={index}
                onClick={() => {
                  setImgIndex(index + 1);
                  setLightBoxImgIndex(index + 1);
                }}
              />
            </button>
          ))}
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
          <div className="discount-flex">
            <h2>$125.00</h2> <span className="discount">50%</span>
          </div>
          <s>$250.00</s>
        </div>
        <div className="flex">
          <div className="numOfItems">
            <button
              onClick={() => setNumberOfItems((prev) => prev - 1)}
              disabled={numberOfItems === 0}
              className={numberOfItems === 0 ? "cursor-not-allowed" : ""}
            >
              <img src="/images/icon-minus.svg" alt="minus-icon" />
            </button>{" "}
            {numberOfItems}
            <button onClick={() => setNumberOfItems((prev) => prev + 1)}>
              <img src="/images/icon-plus.svg" alt="plus-icon" />
            </button>
          </div>
          <button
            className="addToCart"
            onClick={() => props.addToCart({ numberOfItems })}
          >
            <img src="/images/icon-cart.svg" alt="cart-icon" /> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
