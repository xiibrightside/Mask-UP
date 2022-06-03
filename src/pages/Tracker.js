import React from "react";
import Navbar from "../components/Navbar";
import { FadeIn } from "react-slide-fade-in";
import Data from "../components/Data";

const Guidelines = () => {
  return (
    <div className="tp-bg">
      <div className="hp-op">
        <Navbar />
        <FadeIn
          from="left"
          positionOffset={200}
          triggerOffset={200}
          delayInMilliseconds={200}
        >
          <h1 className="hp-tm text-center">TRACKER</h1>
        </FadeIn>
        <FadeIn
          from="bottom"
          positionOffset={200}
          triggerOffset={200}
          delayInMilliseconds={200}
        >
          <Data />
        </FadeIn>
        <footer className="text-blue-200 absolute bottom-0 right-0 p-2 text-xs">
          All info shown - Courtesy of →{" "}
          <a href="https://disease.sh/">( disease.sh )</a>
        </footer>
      </div>
    </div>
  );
};

export default Guidelines;
