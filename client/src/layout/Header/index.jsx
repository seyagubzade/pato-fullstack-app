import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss"

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo">
            <img src="https://preview.colorlib.com/theme/pato/images/icons/logo2.png.webp" />
          </div>
          <ul >
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/add'}>Add New</Link>
            </li>
            <li>
              <Link to={'/wishlist'}>Wishlist</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
