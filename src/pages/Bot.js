/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { FadeIn } from "react-slide-fade-in";
import data from "./data.json";

const Bot = () => {
  const [steps] = useState(data.steps);
  const [value, setValue] = useState(0);

  const { name, description } = steps[value];

  return (
    <div className="bp-bg">
      <div className="hp-op">
        <Navbar />
        <FadeIn
          from="left"
          positionOffset={200}
          triggerOffset={200}
          delayInMilliseconds={200}
        >
          <h1 className="bp-tm text-center">INSTRUCTIONS</h1>
        </FadeIn>
        <FadeIn
          from="left"
          positionOffset={0}
          triggerOffset={0}
          delayInMilliseconds={600}
        >
          <div className="bp-con mx-auto">
            <ul
              className="flex items-center justify-center md:flex-row gap-5 mx-auto"
              start="1"
            >
              {steps.map((item, index) => (
                <li key={index} className="mb-5 mr-5 md:mr-0">
                  <button
                    onClick={() => setValue(index)}
                    className={`bp-circ bg-transparent border text-white ${
                      index === value && "bg-white text-gray-900"
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>

            <div className="bp-rect text-center"></div>
            <div className="text-center mt-10">
              <h2 className="text-white font-bold text-4xl lg:text-5xl mb-5">
                {name}
              </h2>
              <p className="text-white pb-5">{description}</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn
          from="bottom"
          positionOffset={200}
          triggerOffset={200}
          delayInMilliseconds={200}
        >
          <div className="bp-readybtn">
            <a
              href="https://xiibrightside.github.io/maskup-back/"
              className="bp-readylink"
            >
              I'm Ready !
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Bot;
