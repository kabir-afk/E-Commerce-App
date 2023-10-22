import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <li><img src="/images/logo.svg" alt="sneakers-company-logo" /></li>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
        <li className="ml"><img src="/images/icon-cart.svg" alt="cart-icon" /></li>
        <li><div className="avatar"><img src="/images/image-avatar.png" alt="avatar-image" /></div></li>
      </nav>
    </>
  );
}

export default Navbar;
