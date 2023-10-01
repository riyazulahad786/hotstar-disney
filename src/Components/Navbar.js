import React from "react";
// import  Link  from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-transparent mt-3">
        <div className="container-fluid px-5">
         
            <img src="https://uploads-ssl.webflow.com/64100316e1db9e6977ed6b0d/641003bfa1af58cf1d874fde_black-background-01.webp" loading="lazy" alt="image"     className="brand"/>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <a className="nav-link  font-nav" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link font-nav" href="/">
                  Explore
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link mobile-view font-nav" href="/">
                  Blog
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link font-nav" href="/">
                  About
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <button className="mx-3 rounded-pill login-btn bg-transparent px-3 py-2">Login </button>
              <button className="btn  mx-3 rounded-pill sign-btn px-3 py-2">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
