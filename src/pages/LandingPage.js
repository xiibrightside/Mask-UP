import React from "react";
import { FadeIn } from "react-slide-fade-in";
import { NavLink } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <FadeIn positionOffset={0} triggerOffset={0} delayInMilliseconds={200}>
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
    </FadeIn>
  );
};

export default Home;
