 import React from "react";
import Itemcard from "./Itemcard";
import {Component} from 'react'
import { data } from "./data";
import client from "./Client";


class ProductHolder extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  componentDidMount() {
    client
      .getEntries({
        content_type: "Data",
        order: "-sys.createdAt",
      })
      .then((entries) => {
        this.setState({ data: entries.items });
      });
  }
  render(){
    
  return (
    <>
      <section className="py-4 container text-center">


      <div className="row justify-content-center m-5 vege">
          <h2>Vegetables</h2>
          {data.VegeProductData.map((item, index) => {
            return (
              <Itemcard
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
              item={item}
              key={index}
            />
            );
          })}
        </div>
        <div className="row justify-content-center m-5 fruit">
          <h2>Fruits</h2>
          {data.FruitProductData.map((item, index) => {
            return (
              <Itemcard
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
        <div className="row justify-content-center m-5 toys">
          <h2>Toys</h2>
          {data.ToyProductData.map((item, index) => {
            return (
              <Itemcard
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
       
      </section>
    </>
  );}
};

export default   ProductHolder;
