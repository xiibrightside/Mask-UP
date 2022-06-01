import React from "react";
import { UserAuth } from "../context/AuthContext";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../images/heroimage.png";
import Entrance from "../images/entrance.jpg";
import "../App.css";

const Account = () => {
  const { user } = UserAuth();

  return (
    <div className="mb-10">
      <Navbar />
      <h1 className="title2">WELCOME,</h1>
      <div>
        <p className="signed">{user?.displayName}</p>
        <p className="para pt-2.5 pl-7 text-2xl w-3/5">
          Maintaining Covid Guidelines in your Commercial Complex becoming a
          hassle ?
        </p>
        <p className="para pt-2.5 pl-7 text-2xl w-3/5 ">
          Are you UnderStaffed and need a helping hand ?
        </p>
        <p className="para pt-2.5 pl-7 text-2xl w-3/5">
          Don't worry we have got you covered !
        </p>
        <div className="hero">
          <img className="heroimg" src={Hero} alt="hero"></img>
        </div>
        <h3 className="subtitle pl-7">How Does It Work ?</h3>
        <p className="para pt-2.5 pl-7 text-2xl w-3/5">
          Simple .. all you need is your PC and a WebCam, Just install your
          camera near the Store Entrance at head level and hook it up to your
          computer.
        </p>
        <p className="para pt-2.5 pl-7 text-2xl w-3/5">
          Then Navigate to the{" "}
          <NavLink className="botlink" to={"/bot"}>
            Bot Page
          </NavLink>{" "}
          and enable the Camera and you're all set. The Bot will handle the
          rest.
        </p>
        <p className="para pt-2.5 pl-7 text-2xl w-3/5">
          Every time someone comes through the entrance without a Mask On, a
          Voice-Prompt will notify them to wear a mask and to follow the state
          mandated guidelines{" "}
        </p>
        <div className="hero">
          <img className="heroimg" src={Entrance} alt="hero"></img>
        </div>
      </div>
    </div>
  );
};

export default Account;
