import React, { Component } from "react";
import "./Footer.css";
import "font-awesome/css/font-awesome.min.css";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-left col-md-4 col-sm-6">
          <p className="about">
            <span> About our lab</span> Ut congue augue non tellus bibendum, in
            varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus
            odio condimentum in. Sed sed est ut sapien ultrices eleifend. I
          </p>
          <div className="icons">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-center col-md-4 col-sm-6">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span> Lab Address</span>
            </p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p> contact number</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="#"> email address</a>
            </p>
          </div>
        </div>
        <div className="footer-right col-md-4 col-sm-6">
          <h2>
            {" "}
            Lab<span> logo</span>
          </h2>
          <p className="menu">
            <a href="#"> Home</a> |<a href="#"> Members</a> |
            <a href="#"> Research</a> |<a href="#"> Gallery</a>
          </p>
          <p className="name"> Lab Name &copy; 2023</p>
        </div>
      </footer>
    );
  }
}
export default Footer;
