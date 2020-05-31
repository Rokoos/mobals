import React, { Fragment } from "react";
import Phone from "../Phone/Phone";
import Loading from "../Loading/Loading";
import "./phones.styles.scss";

const Phones = ({ phones, loading }) => {
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
  return (
    <div>
      <Fragment>
        {loading ? (
          <Loading />
        ) : phones.length === 0 ? (
          <div className="phones-message">
            <h3>Unfortunately no phones match your search params</h3>
          </div>
        ) : (
          displayPhones()
        )}
      </Fragment>
    </div>
  );
};

export default Phones;
