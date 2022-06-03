import React from "react";
import { FadeIn } from "react-slide-fade-in";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="ap-bg text-center">
      <div className="hp-op">
        <Navbar />
        <FadeIn
          from="left"
          positionOffset={200}
          triggerOffset={200}
          delayInMilliseconds={200}
        >
          <h1 className="hp-tm">SOURCE</h1>
        </FadeIn>
        <FadeIn
          from="bottom"
          positionOffset={200}
          triggerOffset={200}
          delayInMilliseconds={200}
        >
          <p className="ap-p">
            Click on the Icon below to access the <b>Source Code</b>{" "}
          </p>
          <FadeIn
            from="left"
            positionOffset={0}
            triggerOffset={0}
            delayInMilliseconds={600}
          >
            <div className="git-con">
              <a
                href="https://github.com/xiibrightside/Mask-UP"
                target="_blank"
                rel="noreferrer"
              >
                <i class="git fa-6x fa-brands fa-github"></i>
              </a>
            </div>
          </FadeIn>
          <p className="ap-p">
            Designed to help understaffed, small / medium sized businesses in
            helping them maintain WHO mandated guideline for Covid outbreak
            which is primarily → ( <b>Wearing a Face Mask </b> ). We detect and
            prompt people entering your commercial complex to follow the
            guidelines using a Machine Learning approach.
          </p>
        </FadeIn>
      </div>
    </div>
  );
};

export default About;
