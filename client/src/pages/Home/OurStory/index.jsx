import React from "react";
import "./styles.scss";

const OurStory = () => {
  return (
    <div className="our-story">
      <div class="container">
        <div class="row ">
          <div class="col-12 col-md-8 col-lg-7 mt-3">
            <div className="story-content">
              <span>Italian Restaurant</span>
              <h3>WELCOME</h3>
              <p>
                Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est.
                Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi,
                ac facilisis ligula sem id neque.
              </p>
              <a href="#">Our Story</a>
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-5 mt-3">
            <img src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
