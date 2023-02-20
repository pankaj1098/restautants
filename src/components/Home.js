import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import "./HomeStyles.css";
import Layout from "./Layout";

const Home = () => {
  const navigate = useNavigate();
  const orderNowButtonClickHandler = () => {
    navigate("/restaurantList");
  };
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In India</p>

          <button onClick={orderNowButtonClickHandler}>ORDER NOW</button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
