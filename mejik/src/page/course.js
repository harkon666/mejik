import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Link, useParams } from "react-router-dom";

//component
import TopNavBarWithCategory from "./component/NavBar/TopNavBarWithCategory";
import Button from "./component/Button/Button";
import Accordion from "./component/accordion/CourseAccordion";

const Course = () => {
  const { id } = useParams();
  const COURSE = gql`
  query {
    sections (where: {
      courseId: "${id}"
    }) {
      id,
      title
      course {
        id
        title
        description
        cover
      }
      lectures {
        id
        title
      }
    }
  }
`;
  const { error, loading, data } = useQuery(COURSE);
  console.log(data, "woi");
  if (loading) return <h1>Loading..</h1>;
  return (
    <div className="bg-light" style={{ height: "100vh" }}>
      <TopNavBarWithCategory />
      <div className="container my-3">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-8">
                <h3 style={{ fontWeight: "bold" }}>
                  {data.sections[0].course.title}
                </h3>
                <p className="text-light">
                  {data.sections[0].course.description}
                </p>
                <Link
                  to={`/course/watch/${id}/${data.sections[0].lectures[0].id}`}
                >
                  <Button
                    style={{ fontSize: 11, fontWeight: "800" }}
                    className="mt-2"
                    color="white"
                    bgcolor="#8854d0"
                    name="Enroll in Course"
                  />
                </Link>
              </div>
              <div className="col-4">
                <img
                  src={data.sections[0].course.cover}
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <div className="card shadow">
          <div className="card-body my-2 mx-3">
            <div className="d-inline-flex w-100">
              <h6 style={{ fontWeight: "bold" }}>Course Content</h6>
              <div className="d-inline-flex" style={{ marginLeft: "auto" }}>
                <p className="text-primary mx-4">Expand All</p>
                <p>10 Lecture</p>
              </div>
            </div>
            <Accordion data={data.sections} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
