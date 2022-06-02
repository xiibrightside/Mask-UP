import React from "react";
import Navbar from "../components/Navbar";
import Data from "../components/Data";

const Guidelines = () => {
  return (
    <div className="tp-bg">
      <div className="hp-op">
        <Navbar />
        <h1 className="hp-tm text-center">TRACKER</h1>
        <Data />
        <footer className="text-blue-200 absolute bottom-0 right-0 p-2">
          All info shown - Courtesy of →{" "}
          <a href="https://disease.sh/">( disease.sh )</a>
        </footer>
      </div>
    </div>
  );
};

export default Guidelines;
