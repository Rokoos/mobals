import React from "react";
import Phone from "../Phone/Phone";
import "./collection.styles.scss";

const Phones = ({ phones }) => {
  const displayPhones = () => {
    return (
      <div className="phones-collection">
        <div className="phones-view">
          {phones.map((item) => (
            <Phone key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  };
  return <div>{displayPhones()}</div>;
};

export default Phones;
