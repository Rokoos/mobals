import React from "react";
import Phones from "../Phones/Phones";
import data from "../../data";
import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home">
      <Phones phones={data} />
    </div>
  );
};

export default Home;
