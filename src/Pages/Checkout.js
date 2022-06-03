import React from "react";
import { useCart, CartProvider } from "react-use-cart";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();

  const placeOrder = async (e) => {
    document.getElementsByClassName("place-order");
    e.preventDefault();
    history.push("/Combo");
    emptyCart();
  };


  function orderPlacement(){ 
  let formAction = document.getElementById("contact-form");
  formAction.setAttribute("action", "https://send.pageclip.co/2hvTCfbJ6yjwZVVIrcyvQ2WEXmVrrERO/Orders");
    
  }

  return (
    <section className="mb-5 mt-5 pb-5 pt-5">
      <div>
        <div>
          <center>
            <h1 style={{ marginBottom: "30px" }}>Checkout</h1>

            <form
              style={{ background: "black", padding: 5 + "rem" }}
              
              id="contact-form"
              class="form-horizontal"
              role="form"
              method="post"
            >
              <div class="form-group">
                <div class="col-sm-12">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="FULL NAME"
                    name="name"
                    required
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="col-sm-12">
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    placeholder="ADDRESS"
                    name="address"
                    required
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="col-sm-12">
                  <input
                    type="number"
                    class="form-control"
                    id="name"
                    placeholder="CONTACT NUMBER"
                    name="contact number"
                    required
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="col-sm-12">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="EMAIL"
                    name="email"
                    required
                  />
                </div>
              </div>
              {items.map((item, index) => {
                return (
                  <div class="form-group">
                    <div class="col-sm-12">
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="NO ITEMS, GO ADD SOME ITEMS"
                        name="items"
                        value={`Item Name: ${item.title}, Item ID: ${item.id}, Item Price: ${item.price}, Item Quantity: ${item.quantity},`}
                        required
                      />
                    </div>
                  </div>
                );
              })}
              <div class="form-group">
                <div class="col-sm-12">
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    placeholder="TOTAL AMOUNT"
                    name="total amount"
                    value={"Total Price: Rs. " + cartTotal +"*"}
                    required
                  />
                </div>
              </div>
              <p>Do Not Submit Form With No Items In The Cart.</p>
              <button
                class="btn btn-primary send-button"
                id="submit"
                type="submit"
                onClick={() => orderPlacement()}
              >
                <div class="alt-send-button">
                  <i class="fa fa-paper-plane"></i>
                  <span class="send-text">Place Order</span>
                </div>
              </button>
            </form>
          </center>
        </div>
      </div>
    </section>
  );
};

export default Cart;
