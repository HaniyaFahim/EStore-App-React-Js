 import React, { Component } from "react";
import client from "./Client";
import marked from "marked";
import Navbar from "../Components/Navbar";

class About extends Component {
  constructor() {
    super();
    this.state = { aboutpage: [] };
  }

  componentDidMount() {
    client
      .getEntries({
        content_type: "about",
      })
      .then((entries) => {
        this.setState({ aboutpage: entries.items[0] });
      });
  }

  getParsedMarkdown(aboutDescription) {
    return {
      __html: marked(aboutDescription, { sanitize: true }),
    };
  }

  render() {
    return (
      <>
    
      <div>
        <section id="About">
          <div className="container">
            <h2
              style={{
                color: "whitesmoke",
                textDecorationLine: "underline",
                textDecorationColor: "#E34F25",
                textDecorationStyle: "solid",
              }}
              className="text-center"
            >
              A Little About Us!
            </h2>
            {this.state.aboutpage.length === 0 ? (
              <center>
                <div className="loader"></div>
              </center>
            ) : (
            
                <div
                  style={{ color: "whitesmoke" , marginTop:"5em", marginBottom:"2em"}}
                  dangerouslySetInnerHTML={this.getParsedMarkdown(
                    this.state.aboutpage.fields.aboutDescription
                  )}
                ></div>
            )
            // <p>{this.state.aboutpage.fields.aboutDescription}</p>
            }
          </div>
        </section>{" "}
      </div>
      </> );
  }
}
export default   About;
