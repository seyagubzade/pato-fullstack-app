import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Add from "../pages/Add";
import Wishlist from "../pages/Wishlist";
import Detail from "../pages/Detail";
import styled from "styled-components";
import toast, { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div>
      <Header />
      <StyledWrapper>
        <Routes>
          <Route path="*" element={<p>Not Found</p>} />
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </StyledWrapper>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

const StyledWrapper = styled.div`
  min-height: 80vh;
`;
export default Layout;
