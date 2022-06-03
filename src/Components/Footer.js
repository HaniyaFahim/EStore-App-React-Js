import React from "react";
import { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer mt-auto py-3">
          <div className="container text-center">
            <span style={{ color: "white" }}>
              © Copyright H.F. All Rights Reserved <br /> Designed by{" "}
              <a
                style={{ color: "#d83f87" }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://haniya-fahim.web.app"
              >
                Haniya Fahim
              </a>{" "}
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
