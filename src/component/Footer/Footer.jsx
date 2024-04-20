import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="container container-fluid mt-3 w-100">
      <div className="w-100 text-center pb-4">
        <a href=""><img
          style={{ width: "25%", margin: "0px", padding: "0px" }}
          src={logo}
          alt="Logo"
        /></a>
        
      </div>
      <div className="d-lg-flex justify-content-between">
        <div className="intro ">
          <p className="py-2">
            Hopebridge delivers exceptional <br /> emergency, critical care, and
            anesthesia <br /> services across diverse hospitals. Our <br />{" "}
            experienced team ensures personalized <br /> care aligned with
            international standards.
          </p>
        </div>
        <div className="links d-flex flex-column">
          <h5>Links</h5>
          <a href="/" style={{ textDecoration: "none", color: "white" }}>
            Home
          </a>
          <a href="/" style={{ textDecoration: "none", color: "white" }}>
            About Us
          </a>
          <a href="/" style={{ textDecoration: "none", color: "white" }}>
            Careers
          </a>
        </div>
        <div className="Guides d-flex flex-column">
          <h5 className="pt-2">Address </h5>
          <p>
            34/572 Kaithapadath <br /> Building Edappally Toll Junction, <br />{" "}
            Kochi – Kerala
          </p>
        </div>
        <div className="Contact d-flex flex-column">
          <h5 className="">Contact Us</h5>
          <div className=" d-flex flex-column">
            <a
              className="mb-3"
              style={{ textDecoration: "none", color: "white" }}
              href="tel:+918089026661"
            >
              <i className="fa-solid fa-phone me-3"></i>8089026661
            </a>
            <a
              className="mb-3"
              style={{ textDecoration: "none", color: "white" }}
              href="tel:+918089026662"
            >
              <i className="fa-solid fa-phone me-3"></i>8089026662
            </a>
          </div>
          <div className="d-flex">
            <input
              type="text"
              placeholder="Email id Please"
              className="form-control"
            />
            <button className="btn btn-info ms-2">
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="icons d-flex justify-content-between mt-3">
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              <i class="fa-solid fa-phone"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center pt-4 ps-4 pe-4">
        <p>Copyright © 2024 HopeBridge. Built with React.</p>
      </div>
    </div>
  );
};

export default Footer;
