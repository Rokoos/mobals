import React, { Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";

import { clearCart } from "../../actions";
import { getTotalCartPrice, cartItemsCount } from "../../utils";
import "./cart.styles.scss";

const Cart = ({ cartTotalCount, cartItems, history, clearCart }) => {
  const items = cartTotalCount === 1 ? "phone" : "phones";
  return (
    <div className="phones-cart-box">
      <div>
        {cartTotalCount ? (
          <p className="phones-count">
            You have {cartTotalCount} {items} in Your cart.
          </p>
        ) : (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <Link to="/">
              <button className="addItemBox-shopping">Go back shopping</button>
            </Link>
          </div>
        )}
      </div>
      <Fragment>
        {cartItems.map((item) => (
          <h1 key={item.id}>{item.name}</h1>
        ))}
      </Fragment>

      <Fragment>
        {getTotalCartPrice(cartItems) > 0 && (
          <div className="phones-total">
            <span>Total: €{getTotalCartPrice(cartItems)}</span>
            <div className="phones-btns">
              <button
                onClick={() => {
                  clearCart();
                  history.push("/");
                }}
                className="phones-clear-cart"
              >
                Clear cart
              </button>
              <button
                onClick={() => {
                  clearCart();
                  history.push("/");
                  alert("Thank You for visiting my demo e-shop!!");
                }}
                className="phones-checkout"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </Fragment>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartTotalCount: cartItemsCount(state.cart.cartItems),
  cartItems: state.cart.cartItems,
});
export default withRouter(connect(mapStateToProps, { clearCart })(Cart));
