import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1 className="title2 text-center">Error : 404</h1>
      <h1 className="title2 text-center">Page Not Found</h1>
      <p className="para2 text-center">
        {" "}
        Seems you've wandered into an Unknown Land, But there's nothing to
        explore, Would you rather just go back{" "}
        <NavLink className="botlink" to={"/home"}>
          Home
        </NavLink>{" "}
        ?
      </p>
    </div>
  );
};

export default NotFound;
