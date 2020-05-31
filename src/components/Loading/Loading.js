import React from "react";
import gif from "../../images/loading-arrow.gif";
import "./loading.styles.scss";

const Loading = () => {
  return (
    <div className="loading">
      <p>Loading...</p>
      <img src={gif} alt="" />
    </div>
  );
};

export default Loading;
