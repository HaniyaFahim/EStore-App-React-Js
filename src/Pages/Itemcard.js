 import React from "react";
import { useCart } from "react-use-cart";


const Itemcard = (props) => {
  const { addItem } = useCart();

  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow my-card">
        <img src={props.img} className="card-img-top img-fluid" />
        <div className="card-body">
          <h5
            className="card-title"
            style={{ color: "white", textDecoration: "none" }}
          >
            {props.title}
          </h5>
          <h5
            className="card-text"
            style={{ color: "white", textDecoration: "none" }}
          >
            Rs. {props.price}
          </h5>
          <p
            className="card-text"
            style={{ color: "white", textDecoration: "none" }}
          >
            {props.desc}
          </p>
          <button
            className="btn btn-primary"
            onClick={() => addItem(props.item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default   Itemcard;
