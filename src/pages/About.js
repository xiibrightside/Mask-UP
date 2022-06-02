import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="ap-bg text-center">
      <div className="hp-op">
        <Navbar />
        <h1 className="hp-tm">SOURCE</h1>
        <p className="ap-p">
          Click on the Icon below to access the <b>Source Code</b>{" "}
        </p>

        <div className="git-con">
          <a href="https://github.com/xiibrightside/MaskUP">
            <i class="git fa-6x fa-brands fa-github"></i>
          </a>
        </div>
        <p className="ap-p">
          Designed to help understaffed, small / medium sized businesses in
          helping them maintain WHO mandated guideline for Covid outbreak which
          is primarily → ( <b>Wearing a Face Mask </b> ). We detect and prompt
          people entering your commercial complex to follow the guidelines using
          a Machine Learning approach.
        </p>
      </div>
    </div>
  );
};

export default About;
