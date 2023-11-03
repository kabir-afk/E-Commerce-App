import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Container from "../Hero_Container/Hero"
import './App.css';
function App() {
  let[cartItems,setCartItems] = useState(0);
  const addToCart = (a) =>{
    setCartItems(a.numberOfItems);
  }
  return (
    <>
    <Navbar cart = {cartItems}></Navbar>
    <main>
      <Container addToCart = {addToCart}></Container>
    </main>
    </>
  );
}

export default App;
