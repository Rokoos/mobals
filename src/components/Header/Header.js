import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { cartItemsCount } from "../../utils";
import { signInWithGoogle, auth } from "../../firebase/firebase";
import "./header.style.scss";

const Header = ({ currentUser, cartTotalCount }) => {
  return (
    <div className="phones-header">
      <div className="phones-homepage">
        <Link to="/" className="phones-logo">
          <img src="https://www.mobal.com/img/logo.svg" alt="" />
        </Link>
      </div>

      <div className="phones-options">
        {currentUser ? (
          <div onClick={() => auth.signOut()} className="phones-option signBtn">
            Sign Out
          </div>
        ) : (
          <div onClick={signInWithGoogle} className="phones-option signBtn">
            Sign In
          </div>
        )}
        <Link to="/cart" className="phones-option">
          <AiOutlineShoppingCart
            style={{ fontSize: "2.5rem", color: "#555" }}
          />
          {cartTotalCount > 0 && (
            <div className="phones-notification">{cartTotalCount}</div>
          )}
        </Link>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartTotalCount: cartItemsCount(state.cart.cartItems),
  currentUser: state.auth.currentUser,
});
export default connect(mapStateToProps)(Header);
