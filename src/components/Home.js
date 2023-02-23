import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import { selectIsLoggedIn } from "../reducer/userSlice";
import "./HomeStyles.css";
import Layout from "./Layout";

const Home = () => {
  const loggedInState = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const orderNowButtonClickHandler = () => {
    navigate("/restaurantList");
  };
  const orderButtonClickHandler = () => {
    navigate("/login");
  };
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In India</p>
          {loggedInState === true ? (
            <button onClick={orderNowButtonClickHandler}>ORDER NOW</button>
          ) : (
            <button onClick={orderButtonClickHandler}>ORDER NOW</button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
