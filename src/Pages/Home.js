
import React, { Component, useEffect, useState } from "react";
import {useHistory} from 'react-router-dom'
import "./main.css";
import Cart from "./Cart";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { CartProvider } from "react-use-cart";
import Navbar from "../Components/Navbar";

function Home() {
  
const history = useHistory()
  const [newName, setNewName] = useState("");
  const [newMsg, setNewMsg] = useState("");

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const CreateUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, msg: newMsg });
    history.push("/About")
    history.push("/")

    };


  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  return (
    <>
    

      <section id="home" className="p-5">
        <div className="space"></div>
        <h1 className="text-center h1" style={{color:"black",  textDecorationColor: "Black"}}>
          Your Satisfaction <br />
          is <br /> Our Success
        </h1>
        <h2 className="text-center h2">
          <button className="btn btn-dark">Start Shopping!</button>
        </h2>
      </section>
      <div>
        <section className="reviews">
          <div className="container">
            <h1 className="text-center">Our Reviews</h1>
            <div className="App  ">
              <div className="row m-5">
                <div className="col-lg-6 mt-5">
                  <h1 className="text-center">Do you Love Us?</h1>
                  <h4
                    className="text-center"
                    style={{
                      color: "white",
                      textDecorationLine: "underline",
                      textDecorationStyle: "solid",
                      textDecorationColor: "blue",
                    }}
                  >
                    Tell us About Our Product And Quality and Help us Improve...
                  </h4>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Name
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Name..."
                      onChange={(event) => {
                        setNewName(event.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Your Review
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      placeholder="Review..."
                      rows="3"
                      onChange={(event) => {
                        setNewMsg(event.target.value);
                      }}
                    ></textarea>
                  </div>

                  <button
                    className="btn btn-danger form-control"
                    onClick={CreateUser}
                  >
                    {" "}
                    Submit
                  </button>
                </div>
              </div>
              <hr />
              {users.map((user) => {
                return (
                  <div>
                    {/* <div className="card border-success  col-lg-4 col-md-4 col-sm-4 m-4 " style={{userSelect: "auto",backgroundColor:'grey',width: 400+'px'}}>
	<div className="card-body shadow-sm my-2" style={{userSelect: "auto"}}>
		<div className="row" style={{userSelect: "auto"}}>
			<div className="col-md-2" style={{userSelect: "auto"}}>
			<span><i className="far fa-user fa-5x mt-4"></i></span>

					</div>
					<div className="col-md-10" style={{userSelect: "auto"}}>
						<h2 className="my-1 mt-4 ms-5" style={{userSelect: "auto"}}>
							<strong style={{userSelect: "auto"}}>{user.name}</strong>
						</h2>
							<h3 className="mt-3 ms-5" style={{userSelect: "auto"}}>{user.msg}</h3>
							</div></div>
							</div></div>

            {" "} */}

                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="media service-wrap">
                        <div className="mb-5">
                          <span>
                            <i className="far fa-user fa-5x mt-4"></i>
                          </span>
                        </div>
                        <div className="media-body">
                          <b>
                            <h3 className="media-heading">{user.name}</h3>
                          </b>
                        <marquee >  <p className="lead1">{user.msg}</p></marquee>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="spacer"></div>
      </div>
    </>
  );
}

export default Home;
