import React from "react";
import { Link, NavLink } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "../App.css";

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navcontainer">
      <Link to="/home">
        <h1 className="title1 text-xl">MaskUP</h1>
      </Link>
      <nav className="my-auto">
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/bot"}>Bot</NavLink>
        <NavLink to={"/guidelines"}>Guide</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/feedback"}>Feedback</NavLink>

        {user?.displayName ? (
          <button className="logoutbtn" onClick={handleSignOut}>
            logout
          </button>
        ) : (
          <Link to="/signin">
            <button className="signinbtn">Sign In</button>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
