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
    <div>
      <div className="max-w-[240px] m-auto py-4">
        <button onClick={handleGoogleSignIn}>Sign In here</button>
        <Link to={"/"}>
          <button>back</button>
        </Link>
      </div>
    </div>
  );
};

export default Signin;
