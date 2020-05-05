import React from "react";

import TopNavBar from "./component/NavBar/TopNavBarWithSearch";
import Card from "./component/Card/CardWithImage";

const MyCourse = () => {
  return (
    <div className="bg-light" style={{ height: "100vh" }}>
      <TopNavBar color="#8854d0" name="Switch to instructor view" />
      <div className="container">
        <div className="row">
          {new Array(2).fill("").map((val, i) => (
            <div className="my-3 mx-1">
              <Card />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCourse;
