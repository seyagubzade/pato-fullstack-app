import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.scss";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export const HeroSlider = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="bg1">
          <div class=" content-slider">
            <h2>Welcome to</h2>
            <h1>Pato Place</h1>
            <button className="btn btn-hero">Look Menu</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg2">
          <div class=" content-slider">
            <h2>Welcome to</h2>
            <h1>Pato Place</h1>
            <button className="btn btn-hero">Look Menu</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
