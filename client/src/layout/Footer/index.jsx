import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="top">
        <div class="form-group d-flex justify-content-center align-items-center">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            placeholder="Enter email"
            style={{ width: "250px" }}
          />
        </div>
      </div>
      <div className="bottom p-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mt-3">
              <h3>CONTACT US</h3>
              <p>
                <span>
                  <i class="fa-solid fa-location-dot"></i>
                </span>{" "}
                8th floor, 379 Hudson St, New York, NY 10018
              </p>
              <p>
                <span>
                  <i class="fa-solid fa-phone"></i>
                </span>{" "}
                (+1) 96 716 6879
              </p>
              <p>
                <span>
                  <i class="fa-solid fa-envelope"></i>
                </span>{" "}
                contact@site.com
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-5">
              <h3>LATEST TWITTER</h3>

              <div className="twitter-card">
                <span>
                  <i class="fa-brands fa-twitter"></i> @name here
                </span>
                <p>
                  Activello is a good option. It has a slider built into that
                  displays the featured image in the slider.
                </p>
                <span className="date">21 Dec 2017</span>
              </div>
              <div className="twitter-card mt-4">
                <span>
                  <i class="fa-brands fa-twitter"></i> @name here
                </span>
                <p>
                  Activello is a good option. It has a slider built into that
                  displays the featured image in the slider.
                </p>
                <span className="date">21 Dec 2017</span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-5">
              <h3>Links</h3>
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/add"}>Add New</Link>
                </li>
                <li>
                  <Link to={"/wishlist"}>Wishlist</Link>
                </li>
                <li>
                  <Link to={"/"}>About</Link>
                </li>
                <li>
                  <Link to={"/"}>F.A.Q</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
