/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/home");
    }
  }, [user]);

  return (
    <div className="sp-bg">
      <div className="lp-op">
        <div className="lp-con">
          <i class="sp-ico fa-10x fa-brands fa-google"></i>
          <button className="botlink" onClick={handleGoogleSignIn}>
            → Sign In ←
          </button>
          <Link to={"/"}>
            <button>
              <i class="icons fa-3x fa-solid fa-house"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
