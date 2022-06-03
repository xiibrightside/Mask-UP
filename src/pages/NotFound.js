import React from "react";
import { FadeIn } from "react-slide-fade-in";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="np-bg">
      <div className="hp-op">
        <FadeIn
          from="left"
          positionOffset={200}
          triggerOffset={200}
          delayInMilliseconds={200}
        >
          <h1 className="np-tm text-center">Error : 404</h1>
        </FadeIn>
        <FadeIn
          from="left"
          positionOffset={0}
          triggerOffset={0}
          delayInMilliseconds={600}
        >
          <div className="nf-con text-center">
            <i class="nf fa-8x fa-solid fa-triangle-exclamation"></i>
          </div>
        </FadeIn>
        <FadeIn
          from="right"
          positionOffset={200}
          triggerOffset={200}
          delayInMilliseconds={200}
        >
          <h1 className="np-tm text-center">Page Not Found</h1>
        </FadeIn>
        <FadeIn
          from="bottom"
          positionOffset={200}
          triggerOffset={200}
          delayInMilliseconds={200}
        >
          <p className="np-p text-center">
            {" "}
            There's nothing to explore here weary traveller, Would you rather
            just go back{" "}
            <NavLink className="hp-l" to={"/home"}>
              Home
            </NavLink>{" "}
            ?
          </p>
        </FadeIn>
      </div>
    </div>
  );
};

export default NotFound;
