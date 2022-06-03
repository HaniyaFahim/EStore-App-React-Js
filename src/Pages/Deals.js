 import React, { Component } from "react";
import "./main.css";
import client from "./Client";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

class Blog extends Component {
  constructor() {
    super();
    this.state = { blogpage: [] };
  }
  componentDidMount() {
    client
      .getEntries({
        content_type: "blog",
        order: "-sys.createdAt",
      })
      .then((entries) => {
        this.setState({ blogpage: entries.items });
      });
  }
  render() {
    return (
      <>
         

      <div>
        <section className="pt-4" id="Deals">
          <div className="container">
            <div className="text-center">
              <h2>Our Deals</h2>
              <p className="lead" style={{ marginBottom: "50px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="row">
              {this.state.blogpage.map((item, index) => {
                return (
                  <>
                    <div key={index} className="col-md-5 blog-content bl0g">
                      <img
                        src={item.fields.blogThumbnail.fields.file.url}
                        alt=""
                        className="img-blog img-fluid"
                      />
                      <h3>
                        <Link
                          style={{
                            color: "white",
                            textDecorationLine: "underline",
                            textDecorationColor: "#e32525",
                            textDecorationStyle: "solid",
                          }}
                          to={`../Blogs/${item.fields.slug}`}
                        >
                          {item.fields.blogTitle}
                        </Link>
                      </h3>
                      <p>{item.fields.blogDescription}</p>
                    </div>
                    <div className="col-md-1"></div>
                  </>
                );
              })}
           {/* How To use Json Object In React Js
Like We Use Text Type Like This =   {item.fields.blogTitle}
So How To Write It For Json Type */}
            </div>
          </div>
        </section>
      </div>      </>
    );
  }
}

export default   Blog;
