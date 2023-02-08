import React from "react";
import Banner from "../images/banner.jpeg";
import "./HomeStyles.css";
import Layout from "./Layout";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In India</p>

          <button>ORDER NOW</button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
