import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Component } from "react";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Home from "./Pages/Home";
import ProductHolder from "./Pages/ProductHolder";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Combo from "./Pages/Combo";
import Deals from "./Pages/Deals";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/Product Holder" component={ProductHolder} />
          <Route exact path="/About" component={About} />

          <Route exact path="/Product" component={Product} />
          <Route exact path="/Deals" component={Deals} />

          <Route exact path="/Combo" component={Combo} />
          <Route exact path="/Checkout" component={Checkout} />

          <Route exact path="/Cart" component={Cart} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
