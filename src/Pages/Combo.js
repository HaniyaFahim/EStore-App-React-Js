 import React from "react";
import Cart from "./Cart";
import { CartProvider } from "react-use-cart";
import Checkout from "./Checkout";
import Navbar from "../Components/Navbar";

function Combo() {
  return (<>

    <section id="Cart">
      <div className="container">
        <CartProvider>
          <Cart />
          <hr />
          <hr />
          <hr />
          <Checkout />
        </CartProvider>
      </div>{" "}
    </section>
    </>);
}

export default   Combo;
