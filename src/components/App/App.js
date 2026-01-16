import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Container from "../Hero_Container/Hero";
import "./App.css";
function App() {
  let [cartItems, setCartItems] = useState(0);
  const addToCart = (a) => {
    setCartItems(a.numberOfItems);
  };
  const handleDelete = () => {
    setCartItems(0);
  };
  return (
    <>
      <Navbar cart={cartItems} handleDelete={handleDelete} />
      <main>
        <Container addToCart={addToCart} />
      </main>
    </>
  );
}

export default App;
