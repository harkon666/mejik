import React from "react";

//component
import TopNavBarWithCategory from "./component/NavBar/TopNavBarWithCategory";
import Button from "./component/Button/Button";
import Accordion from "./component/accordion/CourseAccordion";

const Course = ({ data }) => {
  return (
    <div className="bg-light" style={{ height: "100vh" }}>
      <TopNavBarWithCategory />
      <div className="container my-3">
        <div className="card">
          <div className="card-body">
            <h3 style={{ fontWeight: "bold" }}>
              The Complete 2020 Web Development Bootcamp
            </h3>
            <p className="text-light">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Button
              style={{ fontSize: 11, fontWeight: "800" }}
              className="mt-2"
              color="white"
              bgcolor="#8854d0"
              name="Enroll in Course"
            />
          </div>
        </div>
      </div>
      <div className="container my-3">
        <div className="card shadow">
          <div className="card-body my-2 mx-3">
            <div className="d-inline-flex w-100">
              <h6 style={{ fontWeight: "bold" }}>Course Content</h6>
              <div className="d-inline-flex" style={{ marginLeft: "auto" }}>
                <p class="text-primary mx-4">Expand All</p>
                <p>10 Lecture</p>
              </div>
            </div>
            <Accordion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
