import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div className="lp-bg">
      <div className="lp-op">
        <div className="lp-con">
          <h1 className="lp-tl">MaskUP</h1>
          <p className="lp-p">Safety Is Just A Couple Clicks Away</p>
          <NavLink to={"/signin"}>
            <button className="lp-gs mt-10">Get Started</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
