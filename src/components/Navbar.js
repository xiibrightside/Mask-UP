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
    <div className="nb-con">
      <Link to="/home">
        <h1 className="nb-tl">MaskUP</h1>
      </Link>
      <nav className="my-auto">
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/bot"}>Bot</NavLink>
        <NavLink to={"/tracker"}>Track</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/feedback"}>Feedback</NavLink>
        {user?.displayName ? (
          <button onClick={handleSignOut}>
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
        ) : (
          <Link to="/signin">
            <button>
              <i class="fa-solid fa-arrow-right-to-bracket"></i>
            </button>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
