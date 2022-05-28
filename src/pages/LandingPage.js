import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <body>
      <Link to="/signin">
        <button className="signinbtn">sign in</button>
      </Link>
      <h1 className="text-center text-3xl font-bold py-8">Landing Page</h1>
    </body>
  );
};

export default Home;
