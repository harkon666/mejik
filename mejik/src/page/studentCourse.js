import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import {Redirect} from 'react-router-dom'

import TopNavBar from "./component/NavBar/TopNavBarWithSearch";
import Card from "./component/Card/CardWithImage";

const COURSES = gql`
  query {
    courses {
      id
      title
      cover
      description
    }
  }
`;

const StudentCourse = () => {
  const { loading, error, data } = useQuery(COURSES);
  if (!localStorage.getItem('jwt')) return <Redirect to="/login" /> 
  console.log(data?.courses);
  return (
    <div className="bg-light" style={{ height: "100vh" }}>
      <TopNavBar name="switch to instructor view" />
      <div className="mx-5">
        <div className="row">
          {data?.courses.map((val) => (
            <Link key={val.id} to={`/course/choose/${val.id}`}>
              <div className="my-3 mx-1">
                <Card
                  img={val.cover}
                  title={val.title}
                  description={val.description}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentCourse;
