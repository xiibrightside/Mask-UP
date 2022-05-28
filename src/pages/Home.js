import React from "react";
import { UserAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

const Account = () => {
  const { user } = UserAuth();

  return (
    <div className="w-[300px] m-auto">
      <Navbar />
      <h1 className="text-center text-2xl font-bold pt-12">Account</h1>
      <div>
        <p>Welcome, {user?.displayName}</p>
      </div>
    </div>
  );
};

export default Account;
