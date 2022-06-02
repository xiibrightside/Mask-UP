import React from "react";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

const Feedback = () => {
  return (
    <div className="fp-bg">
      <div className="hp-op">
        <Navbar />
        <h1 className="hp-tm text-center">FEEDBACK</h1>
        <Form />
      </div>
    </div>
  );
};

export default Feedback;
