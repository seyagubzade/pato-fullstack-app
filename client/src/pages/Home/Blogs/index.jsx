import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="blogs">
      <div className="container">
        <div className="section-header">
          <span>Latest News</span>
          <h3>THE BLOG</h3>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div class="card">
              <img
                src="https://preview.colorlib.com/theme/pato/images/blog-01.jpg"
                class="card-img-top mb-3"
                alt="card-img"
              />
              <div class="card-body">
                <h5 class="card-title">BEST PLACES FOR WINE</h5>
                <p class="card-text">
                  Phasellus lorem enim, luctus ut velit eget, con-vallis egestas
                  eros.
                </p>
                <a>
                  CONTINUE READING <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div class="card">
              <img
                src="https://preview.colorlib.com/theme/pato/images/blog-02.jpg"
                class="card-img-top mb-3"
                alt="card-img"
              />
              <div class="card-body">
                <h5 class="card-title">EGGS AND CHEESE</h5>
                <p class="card-text">
                  Phasellus lorem enim, luctus ut velit eget, con-vallis egestas
                  eros.
                </p>
                <a>
                  CONTINUE READING <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div class="card">
              <img
                src="https://preview.colorlib.com/theme/pato/images/blog-03.jpg"
                class="card-img-top mb-3"
                alt="card-img"
              />
              <div class="card-body">
                <h5 class="card-title">STYLE THE WEDDING PARTY</h5>
                <p class="card-text">
                  Phasellus lorem enim, luctus ut velit eget, con-vallis egestas
                  eros.
                </p>
                <a>
                  CONTINUE READING <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
