 import React from "react";
import { useCart, CartProvider } from "react-use-cart";
import Checkout from "./Checkout";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>;

  return (
    <section>
      <center>
        <div>
          <div className="row">
            <h3>
              Cart ({totalUniqueItems}) Total Items: ({totalItems})
            </h3>

            {items.map((item, index) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="card text-white bg-dark mb-3"
                    id="card"
                    key={index}
                  >
                    <div className="card-body">
                      <center>

                        <h5 className="card-title">Name: {item.title}</h5>
                        <h6 className="card-subtitle mb-2 ">
                          {" "}
                          Price: {item.price}
                        </h6>
                        <p className="card-text">Quantity: {item.quantity}</p>

                        <button
                          className="btn btn-light ms-2 text-center"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <button
                          className="btn btn-light ms-2 text-center"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>

                        <button
                          className="btn btn-light ms-2 text-center"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove Items
                        </button>
                      </center>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="row">
            <h2>Total Price: Rs. {cartTotal} + Delivery Charges*</h2>
          </div>

          <div className="col-auto">
            <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
              Clear Cart
            </button>
          </div>
        </div>
      </center>
    </section>
  );
};

export default   Cart;
