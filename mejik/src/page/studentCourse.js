import React from "react";

import TopNavBar from "./component/NavBar/TopNavBarWithSearch";
import Card from "./component/Card/CardWithImage";

const StudentCourse = () => {
  return (
    <div className="bg-light" style={{ height: "100vh" }}>
      <TopNavBar name="Switch to instructor view" />
      <div className="container">
        <div className="row">
          {new Array(10).fill("").map((val, i) => (
            <div className="my-3 mx-1">
              <Card />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentCourse;
