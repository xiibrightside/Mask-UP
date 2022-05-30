/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import Entrance from "../images/entrance.jpg";

const Bot = () => {
  return (
    <div>
      <Navbar />
      <h1 className="title2">INSTRUCTIONS</h1>
      <ul>
        <li>
          <p className="para pt-4 pl-7 text-2xl w-4/5">
            → Setup the Camera at the busy entrances
          </p>
        </li>
        <li>
          <p className="para pt-4 pl-7 text-2xl w-4/5">
            → Make sure the camera is set at face level so it captures faces
            clearly
          </p>
        </li>
        <li>
          <p className="para pt-4 pl-7 text-2xl w-4/5">
            → Let the bot run in background and Relax
          </p>
        </li>
      </ul>
      <button className="readybtn">
        <a href="cam.html">I'm Ready !!</a>
      </button>
      <div className="hero">
        <img className="heroimg" src={Entrance} alt="hero"></img>
      </div>
    </div>
  );
};

export default Bot;
