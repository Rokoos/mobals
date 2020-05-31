import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./header.style.scss";

const Header = () => {
  return (
    <div className="phones-header">
      <div className="phones-homepage">
        <Link to="/" className="phones-logo">
          <img src="https://www.mobal.com/img/logo.svg" alt="" />
        </Link>
      </div>

      <div className="phones-options">
        <Link to="/cart" className="phones-option">
          <AiOutlineShoppingCart
            style={{ fontSize: "2.5rem", color: "#555" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
