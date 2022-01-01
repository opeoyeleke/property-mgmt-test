import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.scss";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="nav-container">
      <div className="wrapper">
        <div className="logo">
          <div className="icon">A</div> <div className="text">Apartrent</div>
        </div>

        <ul className="nav-links">
          <li>Contact</li>
          <li>About Us</li>
          <li>Blog</li>
          <li className="link">
            <Link to="signin">Sign in</Link>
          </li>

          <div className="app-btn-container">
            <Link to="/signup">
              <div className="app-btn">Get Started </div>
            </Link>
          </div>
        </ul>

        <div
          className="hamburger-menu"
          onClick={() => {
            setShowModal(!showModal);
          }}
        >
          <div className={`hamburger ${showModal ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div
          onClick={() => {
            setShowModal(!showModal);
          }}
          className={showModal ? "mobile-menu" : "mobile-menu off"}
        >
          <div className={showModal ? "wrapper-mobile on" : "wrapper-mobile"}>
            <ul className="nav-links-mobile">
              <li
                onClick={() => {
                  setShowModal(!showModal);
                }}
              >
                Contact
              </li>

              <li
                onClick={() => {
                  setShowModal(!showModal);
                }}
              >
                About Us
              </li>
              <li
                onClick={() => {
                  setShowModal(!showModal);
                }}
              >
                Blog
              </li>
              <li className="link">
                <Link to="signin">Sign in</Link>
              </li>
              <li>
                <Link to="/signup">
                  <div className="app-btn">Get Started </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
