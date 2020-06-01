import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Loading from "../Loading/Loading";
import { addItem, startFetchPhone } from "../../actions";
import "./singlePhone.style.scss";

class SinglePhone extends Component {
  componentDidMount() {
    const phoneId = this.props.match.params.id;
    this.props.startFetchPhone(phoneId);
  }
  render() {
    if (this.props.loading) {
      return <Loading />;
    }

    const {
      company,
      price,
      storage,
      memory,
      imageUrl,
      name,
      battery,
      specs,
    } = this.props.phone;
    return (
      <div className="singlePhoneBox">
        <div>
          <img src={imageUrl} alt={name} />
        </div>
        <div className="singlePhoneSpecs">
          <div className="feature">
            <p>Company:</p>
            <p className="paragraph">{company} </p>
          </div>
          <div className="feature">
            <p>Model:</p>
            <p className="paragraph">{name}</p>
          </div>
          <div className="feature">
            <p>Storage:</p>
            <p className="paragraph">{storage} GB</p>
          </div>
          <div className="feature">
            <p>Memory:</p>
            <p className="paragraph">{memory} GB</p>
          </div>
          <div className="feature">
            <p>Battery:</p>
            <p className="paragraph">{battery} mAh</p>
          </div>
          <div className="feature">
            <p>Price:</p>
            <p className="paragraph">€{price}</p>
          </div>

          <a href={specs} target="_blank" rel="noopener noreferrer">
            Learn more &#8594;
          </a>
        </div>
        <div className="button-box">
          <button
            className="addItemBox-add getIt"
            onClick={() => this.props.addItem(this.props.phone)}
          >
            Add phone to cart
          </button>
          <Link to="/cart">
            <button className="addItemBox-cart">Go to cart</button>
          </Link>

          <Link to="/">
            <button className="addItemBox-shopping">Go back shopping</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  phone: state.phone.phone,
  loading: state.phone.loading,
});

export default connect(mapStateToProps, {
  addItem,
  startFetchPhone,
})(SinglePhone);
