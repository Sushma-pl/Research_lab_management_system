import React, { Component, useContext } from 'react'
import Logo from './images/logo.png';
import { Link } from 'react-router-dom'
import "font-awesome/css/font-awesome.min.css";
import { useState, useEffect } from 'react';
import UserContext from "../Login_page/UserContext";
import "./Navbar.css";
import axios from "axios";
function Navbar(){

     const [email, setEmail] = useState("");
     const userInfo = useContext(UserContext);

     useEffect(() => {
      if (userInfo.email) {
       axios
         .get("http://localhost:5000/user", { withCredentials: true })
         .then((response) => {
           setEmail(response.data.email);
         });
     }
    }, [userInfo.email]);

     function logout() {
       axios
         .post("http://localhost:5000/logout", {}, { withCredentials: true })
         .then(() => setEmail(""));
     }

    return (
      <UserContext.Provider value={{ email, setEmail }}>
        <header>
          <div>
            <nav className="navbar navbar-light navbar-expand-md bg-body-tertiary fixed-top nav-color">
              <div className="container-fluid">
                <a className="navbar-brand mt-2" href="/">
                  <img
                    width="300"
                    height="50"
                    className="align-top"
                    src={Logo}
                    alt="logo"
                  />
                </a>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mx-auto  me-auto mx-20 mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </Link>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/member"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="true"
                      >
                        Members
                      </a>

                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="/member/mentor">
                            Mentor
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/member/students">
                            Students
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/member/alumni">
                            Alumni
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/member/visitor">
                            Visitor
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/research"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Research
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/research/seminar"
                          >
                            Seminar
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/research/conference"
                          >
                            Conference deadlines
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/research/awards">
                            Awards
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/research/publications"
                          >
                            Publications
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/research/inventry"
                          >
                            Inventory
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/research/facilities"
                          >
                            Facilities
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/gallery"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Gallery
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="/gallery/photos">
                            Photos
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/gallery/video">
                            Video
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="navbar-nav navbar-right">
                    <li>
                      {!!email ? (
                        <button
                          type="button"
                          className="btn btn-outline-dark margin-class"
                          onClick={() => logout()}
                        >
                          <i className="fas fa-user login-size"></i> Logout
                        </button>
                      ) : (
                        <Link to="/Login">
                          <span></span>
                          <button
                            type="button"
                            className="btn btn-outline-dark margin-class"
                            // onClick={this.handleLogin}
                          >
                            <i className="fas fa-user login-size"></i> Login
                          </button>
                        </Link>
                      )}
                    </li>
                    {/* <li>
                    <Link to="/login">
                      <span></span>
                      <button
                        type="button"
                        className="btn btn-outline-dark margin-class"
                      >
                        <i className="fas fa-sign-in-alt login-size"></i> Login
                      </button>
                    </Link>
                  </li> */}
                    <ul>
                      {/* <Link to="/profile">
                      <span></span>
                      <button
                        type="button"
                        className="btn btn-outline-dark margin-class"
                      >
                        <i className="fas fa-user login-size"></i> Profile
                      </button>
                    </Link> */}
                      <li>
                        {!!email ? (
                          <Link to="/Profile">
                            <span></span>
                            <button
                              type="button"
                              className="btn btn-outline-dark margin-class"
                            >
                              <i className="fas fa-user login-size"></i> Profile
                            </button>
                          </Link>
                        ) : (
                          <Link to="/SignUp">
                            <span></span>
                            <button
                              type="button"
                              className="btn btn-outline-dark margin-class"
                              // onClick={this.handleLogin}
                            >
                              <i className="fas fa-user login-size"></i> SignUp
                            </button>
                          </Link>
                        )}
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <Link to="/Profile">
                          <span></span>
                          <button
                            type="button"
                            className="btn btn-outline-dark margin-class"
                          >
                            <i className="fas fa-user login-size"></i> Profile
                          </button>
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </UserContext.Provider>
    );
  }


export default Navbar
