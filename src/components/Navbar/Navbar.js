import React, { useState } from "react";
import "./Navbar.css";

function Navbar(props) {
  const [isCheckoutVisible, setCheckoutVisible] = useState("hide");
  let [isCartEmpty, setCartEmpty] = useState(<p>Your cart is empty</p>);
  const toggleCheckout = () => {
    isCheckoutVisible === "hide"
      ? setCheckoutVisible("unhide")
      : setCheckoutVisible("hide");

    props.cart !== 0
      ? setCartEmpty(
          <>
            <div className="checkout-flex">
              <div className="checkout-thumbnail-img">
                <img
                  src="images/image-product-1-thumbnail.jpg"
                  alt="prod-1-thumbnail"
                />
              </div>
              <div>
                <p>Fall Limited Edtion Sneakers</p>
                <p>
                  $125.00 x {props.cart}{" "}
                  <span>${(props.cart * 125.0).toFixed(2)}</span>
                </p>
              </div>
              <div className="dustbin">
                <img src="images/icon-delete.svg" alt="dustbin" />
              </div>
            </div>
            <button>Checkout</button>
          </>
        )
      : setCartEmpty(<p className="empty-cart">Your cart is empty</p>);
  };
  return (
    <header>
      <nav className="navbar">
        <li id="logo">
          <img src="/images/logo.svg" alt="sneakers-company-logo" />
        </li>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
        <li className="ml">
          <img
            src="/images/icon-cart.svg"
            alt="cart-icon"
            className="cart"
            onClick={toggleCheckout}
          />
          <span className="cart-items">{props.cart}</span>
        </li>
        <li id="avatar">
          <div className="avatar">
            <img src="/images/image-avatar.png" alt="avatar-image" />
          </div>
        </li>
      </nav>
      <div className={`checkout ${isCheckoutVisible}`}>
        <span>Cart</span>
        <hr />
        {isCartEmpty}
      </div>
    </header>
  );
}

export default Navbar;
