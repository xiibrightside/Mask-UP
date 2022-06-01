import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div className="lp">
      <div className="opacity">
        <div className="lpdiv col-span-2">
          <h1 className="title1 text-9xl">MaskUP</h1>
          <p className="para mt-10 text-3xl">
            Safety Is Just A Couple Clicks Away
          </p>
          <NavLink to={"/signin"}>
            <button className="signinbtn mt-10">Get Started</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
