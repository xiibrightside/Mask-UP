import React from "react";
import { UserAuth } from "../context/AuthContext";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../images/heroimage.png";
import "../App.css";

const Account = () => {
  const { user } = UserAuth();

  return (
    <div className="mb-10">
      <Navbar />
      <h1 className="title2">WELCOME,</h1>
      <div>
        <p className="signed">{user?.displayName}</p>
        <p className="para">
          Maintaining Covid Guidelines in your Commercial Complex becoming a
          hassle ?
        </p>
        <p className="para">Are you UnderStaffed and need a helping hand ?</p>
        <p className="para">Don't worry we have got you covered</p>
        <div className="hero">
          <img className="heroimg" src={Hero} alt="hero"></img>
        </div>
        <h3 className="subtitle">How Does It Work ?</h3>
        <p className="para">
          Simple .. all you need is your PC and a WebCam, Just install your
          camera near the Store Entrance at head level and hook it up to your
          computer.
        </p>
        <p className="para">
          Then Navigate to the{" "}
          <NavLink className="botlink" to={"/bot"}>
            Bot Page
          </NavLink>{" "}
          and enable the Camera and you're all set. The Bot will handle the
          rest.
        </p>
        <p className="para">
          Every time someone comes through the entrance without a Mask On, a
          Voice-Prompt will notify them to wear a mask and to follow the Complex
          guidelines{" "}
        </p>
      </div>
    </div>
  );
};

export default Account;
