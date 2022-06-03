import  { Link } from "react-router-dom";
import React,{ Component } from "react";
import "./Footer.css";
import "../Pages/main.css";

function Navbar() {
  return (
    <div>
     
      <center>
        <nav className="navbar navbar-expand-md mb-0 navibar">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <b>
                  {" "}
                  <Link
                    style={{
                      color: "#986290",
                      fontSize: 40 + "px",
                    }}
                    className="navbar-brand Link a"
                    to="#"
                  >
                    Carvin0 Store
                  </Link>
                </b>
            
              </div>
            </div>
          </div>
        </nav>
        <nav className="navbar navbar-expand-md navibar">
        <div className="container">
              {"\n"}
              <button
                style={{ color: "whitesmoke" }}
                className="navbar-toggler text-center"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                Explore!!! 👉👉👉
                <span className="navbar-toggler-icon">
                  <i
                    className="fas fa-bars fa-1x"
                    style={{ color: "#fff", fontsize: 35+"px" }}
                  >
                    {" "}
                  </i>
                </span>
                👈👈👈 Explore!!!
              </button>
         
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="collapse navbar-collapse" id="navbarCollapse">
                  <ul className="navbar-nav ms-auto mb-2 mb-md-0 navbar-center">
                  <li className="nav-item">
                      <b>
                        {" "}
                        <Link
                          className="Link"
                          className="nav-link active al"
                          aria-current="page"
                          style={{ color: "white", fontSize: 20 + "px" }}
                          to=""
                          target="_blank"
                        >
<i class="fab fa-youtube-square"></i>
</Link>
                      </b>{" "}
                    </li>
                    <li className="nav-item">
                      <b>
                        {" "}
                        <Link
                          className="Link"
                          className="nav-link active al"
                          aria-current="page"
                          style={{ color: "white", fontSize: 20 + "px" }}
                          to=""
                          target="_blank"
                        >
<i class="fab fa-github-square"></i>                        </Link>
                      </b>{" "}
                    </li>
                     <li className="nav-item">
                      <b>
                        {" "}
                        <Link
                          className="Link"
                          className="nav-link active al"
                          aria-current="page"
                          style={{ color: "white", fontSize: 20 + "px" }}
                          to="/"
                        >
                          Home
                        </Link>
                      </b>{" "}
                    </li>
                    <li className="nav-item">
                      <b>
                        {" "}
                        <Link
                          className="Link"
                          className="nav-link active al"
                          aria-current="page"
                          style={{ color: "white", fontSize: 20 + "px" }}
                          to="/Signin"
                        >
                          Sign In
                        </Link>
                      </b>{" "}
                    </li>
                    <li className="nav-item">
                      <b>
                        {" "}
                        <Link
                          className="Link"
                          className="nav-link active al"
                          aria-current="page"
                          style={{ color: "white", fontSize: 20 + "px" }}
                          to="/Signup"
                        >
                          Sign Up
                        </Link>
                      </b>{" "}
                    </li>
                    <li className="nav-item">
                      <b>
                        {" "}
                        <Link
                          className="Link"
                          className="nav-link active al"
                          aria-current="page"
                          style={{ color: "white", fontSize: 20 + "px" }}
                          to=""
                          target="_blank"
                        >
<i class="fab fa-facebook-square" style={{userSelect: "auto"}} ></i>

               </Link>
                      </b>{" "}
                    </li>
                    <li className="nav-item">
                      <b>
                        {" "}
                        <Link
                          className="Link"
                          className="nav-link active al"
                          aria-current="page"
                          style={{ color: "white", fontSize: 20 + "px" }}
                          to=""
                          target="_blank"
                        >
<i class="fab fa-linkedin"></i>                        </Link>
                      </b>{" "}
                    </li>
            
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>{" "}
      </center>
    </div>
  );
}

export default Navbar;
