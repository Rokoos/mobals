import React from "react";
import { getTotalItemPrice } from "../../utils";
import { addItem, clearItemFromCart, removeItem } from "../../actions";
import { GoTrashcan } from "react-icons/go";
import "./cartItem.styles.scss";
import { connect } from "react-redux";

const CartItem = ({ item, addItem, clearItemFromCart, removeItem }) => {
  const { company, name, imageUrl, price, quantity } = item;
  const word = quantity === 1 ? "item" : "items";
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-medium">
          <img className="cart-image" src={imageUrl} alt={name} />
        </div>
        <div className="header-medium">
          <span>
            {company} {name}
          </span>
        </div>
        <div className="header-small">
          <span>€{price}</span>
        </div>
        <div className="header-medium">
          <div onClick={() => removeItem(item)} className="btn-black">
            <span>-</span>
          </div>
          <span className="quantity">{quantity}</span>
          <div onClick={() => addItem(item)} className="btn-black">
            <span>+</span>
          </div>
        </div>
        <div className="header-small">
          <span>
            <GoTrashcan
              onClick={() => clearItemFromCart(item)}
              className="trash"
            />
          </span>
        </div>
        <div className="header-medium">
          <span>
            Total {word} price: €{getTotalItemPrice(quantity, price)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { addItem, clearItemFromCart, removeItem })(
  CartItem
);
