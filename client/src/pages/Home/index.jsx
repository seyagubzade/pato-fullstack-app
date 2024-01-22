import React from "react";
import { Helmet } from "react-helmet";
import { HeroSlider } from "./HeroSlider";
import OurStory from "./OurStory";
import FoodsMenu from "./FoodsMenu";
import Blogs from "./Blogs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HeroSlider />  
      <OurStory />
      <FoodsMenu />
      <Blogs />
    </div>
  );
};

export default Home;
