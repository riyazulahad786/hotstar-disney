import React from "react";

function Footer() {
  return (
    <div>
      <div className="footer-main">
        <div className="d-flex justify-content-center">
          <h6 className="text-white contact-footer">Contact Us</h6>
        </div>
        <div className="d-flex justify-content-center">
          <h1 className="text-white ">Are You a Flimmaker?</h1>
        </div>
        <div className="d-flex justify-content-center">
          <a
            data-w-id="e2da9df2-a62f-d8f6-c396-5c8652f5cd39"
            href="#"
            className="button-2 w-button mt-3"
          >
            Contact Us
          </a>
        </div>
        <hr className=" text-white mx-5" />

        <div className="d-flex justify-content-center my-4">
          <div className="nav-item mx-2">
            <a className="nav-link text-white font-nav" href="#">
              Home
            </a>
          </div>
          <div className="nav-item mx-2">
            <a className="nav-link text-white font-nav" href="#">
              Careers
            </a>
          </div>
          <div className="nav-item mx-2">
            <a className="nav-link text-white font-nav" href="#">
              about
            </a>
          </div>
        </div>
        <hr className="px-5 text-white mx-5" />
        <div className="d-flex justify-content-center">
          <p className="footer-sub-header-1">
            Privacy policy | Terms of Service | Returns | Shipping policy | FAQ
            | Contact Us
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <p className="footer-sub-header-2">
            Copyright © 2023. CreatorMonet Technologies PVT LTD. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
