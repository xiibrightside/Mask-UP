import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="text-center">
      <Navbar />
      <h1 className="title2">SOURCE</h1>
      <p className="para mt-5 text-center text-2xl">
        Click on the Icon below to access the entire <b>Source Code</b>{" "}
      </p>

      <div className="pt-8 pl-7 mb-10">
        <a href="https://github.com/xiibrightside/MaskUP">
          <i class="git fa-6x fa-brands fa-github"></i>
        </a>
      </div>
      <p className="para mt-5 p-10 text-center text-2xl">
        Designed to help understaffed, small-medium sized businesses in helping
        them maintain WHO mandated guideline for Covid outbreak which is
        primarily - ( <b>Wearing a Face Mask </b> ). We detect and prompt people
        entering your commercial complex to follow the guidelines using a
        machine learning approach
      </p>
      <p className="para mt-5 text-center text-2xl">
        This Project was Created by :- Satyam Thakur, Ayush Arora, Hudaib
        Mahmood and Bhavjeet Singh for our B.Tech Final Year Project Submission.
      </p>
    </div>
  );
};

export default About;
