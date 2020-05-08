import React from "react";
import { Redirect } from "react-router-dom";

import TopNavBar from "./component/NavBar/TopNavBarWithSearch";
import Card from "./component/Card/CardWithImage";

const MyCourse = () => {
  if (!localStorage.getItem("jwt")) return <Redirect to="/login" />;

  return (
    <div className="bg-light" style={{ height: "100vh" }}>
      <TopNavBar color="#8854d0" name="Switch to instructor view" />
      <div className="container">
        <div className="row"></div>
      </div>
    </div>
  );
};

export default MyCourse;
