import React from "react";
import "./Navbar.css";

function Navbar() {
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
          <img src="/images/icon-cart.svg" alt="cart-icon" className="cart"/>
        </li>
        <li id="avatar">
          <div className="avatar">
            <img src="/images/image-avatar.png" alt="avatar-image" />
          </div>
        </li>
      </nav>
    </header>
  );
}

export default Navbar;
