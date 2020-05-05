import React from "react";

import TopNavBar from "./component/NavBar/TopNavBarWithSearch";
import Card from "./component/Card/CardWithImage";
import Button from "./component/Button/Button";

const InstructorCourse = () => {
  return (
    <div className="bg-light" style={{ height: "100vh" }}>
      <TopNavBar />
      <div className="container mt-3">
        <div className="row">
          <h3 style={{ fontWeight: "bolder" }}>Created Course</h3>
          <Button
            style={{ marginLeft: "auto" }}
            name="New Course"
            color="white"
            bgcolor="#8854d0"
          />
        </div>
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

export default InstructorCourse;
