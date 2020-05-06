import React from "react";

//component
import NavBar from "./component/NavBar/TopNavBarWithTitle";
import ExpandPanel from "./component/ExpandPanel/ExpandPanel";

const WatchCourse = () => {
  return (
    <div className="bg-light" style={{ height: "100vh" }}>
      <NavBar />
      <div className="container m-5">
        <div className="row justify-content-center">
          <div className="col-7">
            {/* untuk embbed video */}
            <h4 style={{ fontWeight: "bolder" }}>
              What will you get in this course
            </h4>
            <p>Become best web developer with rafee kazi awkakwokawokaow</p>
          </div>
          <div className="col-4">
            <ExpandPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchCourse;
