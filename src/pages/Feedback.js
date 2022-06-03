import React from "react";
import Form from "../components/Form";
import { FadeIn } from "react-slide-fade-in";
import Navbar from "../components/Navbar";

const Feedback = () => {
  return (
    <div className="fp-bg">
      <div className="hp-op">
        <Navbar />
        <FadeIn
          from="left"
          positionOffset={200}
          triggerOffset={200}
          delayInMilliseconds={200}
        >
          <h1 className="hp-tm text-center">FEEDBACK</h1>
        </FadeIn>
        <Form />
      </div>
    </div>
  );
};

export default Feedback;
