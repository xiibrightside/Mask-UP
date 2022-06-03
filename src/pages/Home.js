import React from "react";
import { UserAuth } from "../context/AuthContext";
import { NavLink } from "react-router-dom";
import { FadeIn } from "react-slide-fade-in";
import Navbar from "../components/Navbar";
import "../App.css";

const Account = () => {
  const { user } = UserAuth();

  return (
    <div className="hp-bg">
      <div className="hp-op">
        <Navbar />
        <FadeIn
          from="left"
          positionOffset={200}
          triggerOffset={200}
          delayInMilliseconds={200}
        >
          <h1 className="hp-tm">WELCOME,</h1>
        </FadeIn>
        <FadeIn
          from="bottom"
          positionOffset={300}
          triggerOffset={200}
          delayInMilliseconds={200}
        >
          <div>
            <p className="hp-dn">{user?.displayName}</p>

            <p className="hp-p">
              Maintaining a Covid Safe environment in your commercial complex
              becoming a hassle ?
            </p>
            <p className="hp-p">
              Are you UnderStaffed and need a helping hand ?
            </p>
            <p className="hp-p">Don't worry we have got you covered !</p>

            <p className="hp-p">
              Navigate to the{" "}
              <NavLink className="hp-l" to={"/bot"}>
                Bot Page
              </NavLink>{" "}
              and follow the 3 simple Instructions to continue . .
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Account;
