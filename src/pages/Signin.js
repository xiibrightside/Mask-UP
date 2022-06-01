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
    <>
      {" "}
      <div className="lpdiv col-span-3 gap-y-16"></div>
      <div className="sp">
        <div className="opacity">
          <div className="lpdiv col-span-3 gap-y-16">
            <i class="icong fa-10x fa-brands fa-google"></i>
            <button
              className="botlink text-center text-5xl"
              onClick={handleGoogleSignIn}
            >
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
    </>
  );
};

export default Signin;
