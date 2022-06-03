 import React, { Component } from "react";
import client from "./Client";
import "./main.css";


import ProductHolder from "./ProductHolder";
import Cart from "./Cart";
import { CartProvider } from "react-use-cart";
import Navbar from "../Components/Navbar";

class Product extends Component {
  render() {
    return (
      <>
      
      <div>
        <section id="Product" className="p-4">
          <div className="container">
            <div className="text-center">
              <h1>Our Products</h1>
            </div>

            <div className="row">
              <CartProvider>
                <ProductHolder />
              </CartProvider>
            </div>
          </div>
        </section>
      </div></>
    );
  }
}

export default   Product;
