import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";

//component
import NavBar from "./component/NavBar/TopNavBarWithTitle";
import ExpandPanel from "./component/ExpandPanel/ExpandPanel";
import WatchGrid from "./component/WatchGrid/WatchGrid";

const WatchCourse = () => {
  const { id1, id2 } = useParams();
  console.log(id1, 1, id2, 2);
  const SECTION = gql`
    query {
      sections (where: {
        courseId: "${id1}"
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

  const LECTURE = gql`
    query {
      lecture (id: "${id2}") {
        id,
        title,
        description,
        embedLink
      }
    }
  `;

  const { data, loading } = useQuery(SECTION);
  const { data: dataLec, loading: loadingLec } = useQuery(LECTURE);
  console.log(data, 1);

  if (loading || loadingLec) return <h1>Loading..</h1>;
  return (
    <div className="bg-light" style={{ height: "100vh" }}>
      <NavBar title={data.sections[0].course.title} />
      <div className="container m-5">
        <div className="row justify-content-center">
          <div className="col-7">
            <div>
              {/* untuk embbed video */}
              <h4 style={{ fontWeight: "bolder" }}>{dataLec.lecture.title}</h4>
              <p>{dataLec.lecture.description}</p>
            </div>
          </div>
          <div className="col-4">
            {data
              ? data.sections.map((val) => (
                  <ExpandPanel key={val.id} data={val} />
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};
//

export default WatchCourse;
