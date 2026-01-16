import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar({ cart, handleDelete }) {
  const [isCheckoutVisible, setCheckoutVisible] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [hamburgerIcon, setIconTo] = useState("menu");
  const [alt, setAlt] = useState("hamburger-icon");
  const [sideBarWidth, setSideBarWidth] = useState("hide-sidebar");
  useEffect(() => {
    setCartItems(cart);
  }, [cart]);
  const changeIcon = () => {
    setIconTo(hamburgerIcon === "menu" ? "close" : "menu");
    setAlt(alt === "hamburger-icon" ? "cross-icon" : "hamburger-icon");
    setSideBarWidth(
      sideBarWidth === "hide-sidebar" ? "unhide-sidebar" : "hide-sidebar"
    );
  };
  return (
    <header>
      <nav>
        <ul className="navbar">
          <li>
            <button id="hamburger-icon" onClick={changeIcon}>
              <img src={`/images/icon-${hamburgerIcon}.svg`} alt={alt} />
            </button>
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
                onClick={() => setCheckoutVisible(!isCheckoutVisible)}
              />
            </div>
            <span className="cart-items">{cart}</span>
          </li>
          <li id="avatar">
            <div className="avatar">
              <img src="/images/image-avatar.png" alt="avatar" />
            </div>
          </li>
        </ul>
      </nav>
      {isCheckoutVisible && (
        <div className={"checkout"}>
          <span>Cart</span>
          <hr />
          {cartItems !== 0 ? (
            <div>
              <div className="checkout-flex">
                <div className="checkout-thumbnail-img">
                  <img
                    src="/images/image-product-1-thumbnail.jpg"
                    alt="prod-1-thumbnail"
                  />
                </div>
                <div>
                  <p>Fall Limited Edition Sneakers</p>
                  <p>
                    $125.00 x {cartItems}{" "}
                    <span>${(cartItems * 125.0).toFixed(2)}</span>
                  </p>
                </div>
                <button className="dustbin" onClick={handleDelete}>
                  <img src="/images/icon-delete.svg" alt="dustbin" />
                </button>
              </div>
              <button>Checkout</button>
            </div>
          ) : (
            <p className="empty-cart">Your cart is empty</p>
          )}
        </div>
      )}
      <div className={`sidebar ${sideBarWidth}`}>
        <div className="sidebar-white-bg">
          <p>Collections</p>
          <p>Men</p>
          <p>Women</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
