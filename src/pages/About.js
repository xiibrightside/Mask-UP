import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="text-center">
      <Navbar />
      <h1 className="title2">About</h1>
      <p className="para pt-2.5 pl-7 text-2xl">
        This Mask Detection system Is Designed using State of the Art JavaScript
        Front-End and a Custom Trained Tensorflow Datamodel to Detect a Live
        Feed of People and Classify between People who are and aren't wearing a
        Face Mask and Project it's detections using Anchors and Tags.
      </p>
      <p className="para pt-10 pl-7 text-2xl">
        This Project was Created by :- Satyam Thakur, Ayush Arora, Hudaib
        Mahmood and Bhavjeet Singh for our B.Tech Final Year Project Submission.
      </p>
      <h1 className="title2">Source Code</h1>
      <p className="para pt-2.5 pl-7 text-2xl">
        Click on the Icon below to access the entire Source Code{" "}
      </p>

      <div className="pt-8 pl-7 mb-10">
        <a href="https://github.com/xiibrightside/MaskUP">
          <i class="git fa-6x fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default About;
