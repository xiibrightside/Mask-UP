/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import data from "./data.json";
import "../images/bot page/camera-perm.png";

const Bot = () => {
  const [steps] = useState(data.steps);
  const [value, setValue] = useState(0);

  const { name, description } = steps[value];

  return (
    <>
      <Navbar />
      <section className="home steps">
        <div>
          <h1 className="title2 text-center">INSTRUCTIONS</h1>
          <div className="container2 mx-auto">
            <div className="circles">
              <ul
                className="flex items-center justify-center md:flex-row gap-5 mx-auto"
                start="1"
              >
                {steps.map((item, index) => (
                  <li key={index} className="mb-5 mr-5 md:mr-0">
                    <button
                      onClick={() => setValue(index)}
                      className={`bg-transparent border rounded-full w-16 h-16 text-white text-4xl ${
                        index === value && "bg-white text-gray-900"
                      }`}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center mt-10">
              <h2 className="text-white font-bold text-4xl lg:text-5xl mb-5">
                {name}
              </h2>
              <p className="text-white pb-5">{description}</p>
            </div>
          </div>
        </div>
      </section>
      <div className="ugh">
        <a href="cam.html" className="sex">
          I'm Ready !
        </a>
      </div>
    </>
  );
};

export default Bot;
