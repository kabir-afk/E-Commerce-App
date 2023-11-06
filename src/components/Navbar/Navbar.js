import React, { useState } from "react";
import "./Navbar.css";

function Navbar(props) {
  const [isDelete, setIsDelete] = useState(false);
  const [isCheckoutVisible, setCheckoutVisible] = useState("hide");
  let [isCartEmpty, setCartEmpty] = useState(<p>Your cart is empty</p>);
  const deleteItems = () => {
    // setCartEmpty(<p className="empty-cart">Your cart is empty</p>);
    setIsDelete(true);
    console.log({ isDelete });
  };
  const toggleCheckout = () => {
    isCheckoutVisible === "hide"
      ? setCheckoutVisible("unhide")
      : setCheckoutVisible("hide");

    if (props.cart !== 0) {
      setCartEmpty(
        <>
          <div className="checkout-flex">
            <div className="checkout-thumbnail-img">
              <img
                src="images/image-product-1-thumbnail.jpg"
                alt="prod-1-thumbnail"
              />
            </div>
            <div>
              <p>Fall Limited Edition Sneakers</p>
              <p>
                $125.00 x {props.cart}{" "}
                <span>${(props.cart * 125.0).toFixed(2)}</span>
              </p>
            </div>
            <button className="dustbin" onClick={deleteItems}>
              <img src="images/icon-delete.svg" alt="dustbin" />
            </button>
          </div>
          <button>Checkout</button>
        </>
      );
    } else if (props.cart === 0 || isDelete === true) {
      setCartEmpty(<p className="empty-cart">Your cart is empty</p>);
    }
  };
  return (
    <header>
      <nav className="navbar">
        <li>
          <div id="hamburger-icon">
            <img src="images/icon-menu.svg" alt="hamburger-icon" />
          </div>
        </li>
        <li id="logo">
          <div className="logo">
            <img src="/images/logo.svg" alt="sneakers-company-logo" />
          </div>
        </li>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
        <li className="ml">
          <div className="cart">
            <img
              src="/images/icon-cart.svg"
              alt="cart-icon"
              onClick={toggleCheckout}
            />
          </div>
          <span className="cart-items">{props.cart}</span>
        </li>
        <li id="avatar">
          <div className="avatar">
            <img src="/images/image-avatar.png" alt="avatar" />
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
