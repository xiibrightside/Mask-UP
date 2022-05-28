import React from "react";
import { Link, NavLink } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

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
    <div className="flex justify-between bg-gray-200 w-full p-4">
      <nav>
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/camera"}>Camera</NavLink>
        <NavLink to={"/guidelines"}>Guidelines</NavLink>
        <NavLink to={"/feedback"}>Feedback</NavLink>
      </nav>
      {user?.displayName ? (
        <button className="logoutbtn" onClick={handleSignOut}>
          Logout
        </button>
      ) : (
        <Link to="/signin">
          <button className="signinbtn">sign in</button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
