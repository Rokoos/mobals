import React from "react";
import { Link } from "react-router-dom";
import "./phone.styles.scss";

const CollectionItem = ({ item }) => {
  const { id, company, name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}>
        <Link to={`/phone/${id}`} className="btn-phone phone-link">
          DETAILS
        </Link>
      </div>

      <div className="collection-footer">
        <div className="footer-span">
          <span>{`${company} ${name}`}</span>
        </div>
        <div className="footer-span">
          <span>€{price}</span>
        </div>
      </div>
      <button className="getIt">Add to cart</button>
    </div>
  );
};

export default CollectionItem;
