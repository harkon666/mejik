import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";

import Modal from "./component/Modal/Modal";
import TopNavBar from "./component/NavBar/TopNavBarWithSearch";
import Card from "./component/Card/CardWithImage";
import Button from "./component/Button/Button";
import Empty from "./component/Empty/Empty";

let decoded;
if (localStorage.getItem("jwt")) {
  decoded = jwtDecode(localStorage.getItem("jwt"));
} else {
  decoded = null;
}

const COURSES = gql`
  query {
    courses (where: {
      createdById: "${decoded}"
    }) {
      id
      title
      cover
      description
    }
  }
`;

const InstructorCourse = () => {
  const { data, loading } = useQuery(COURSES);
  const [open, setOpen] = useState(false);
  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="bg-light" style={{ height: "100vh" }}>
      <TopNavBar name="switch to student view" />
      {data.courses.length > 0 ? (
        <>
          {" "}
          <div className="container mt-3">
            <div className="row">
              <h3 style={{ fontWeight: "bolder" }}>Created Course</h3>
              <Button
                style={{ marginLeft: "auto" }}
                name="New Course"
                color="white"
                bgcolor="#8854d0"
                onClick={() => setOpen(true)}
              />
            </div>
            <div className="row">
              {data.courses.map((val) => (
                <div className="my-3 mx-1">
                  <Card
                    key={val.id}
                    img={val.cover}
                    title={val.title}
                    description={val.description}
                  />
                </div>
              ))}
            </div>
          </div>
          <Modal open={open} handleClose={() => setOpen(false)} />{" "}
        </>
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default InstructorCourse;
