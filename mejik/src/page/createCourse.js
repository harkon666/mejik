import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import update from "react-addons-update";

//component
import NavBar from "./component/NavBar/TopNavBar";
import Button from "./component/Button/Button";
import Input from "./component/BootstrapInput/BootstrapInput";
import CardLecture from "./component/Card/CardLecture";
import ExpandPanelLecture from "./component/ExpandPanel/ExpandPanelLecture";
import CardInputSection from "./component/Card/CardInputSection";

//material icon
import DragIndicatorOutlinedIcon from "@material-ui/icons/DragIndicatorOutlined";

const CreateCourse = () => {
  const [section, setSection] = useState([]);
  const [lecture, setLecture] = useState([]);
  const [textSection, setTextSection] = useState({
    title: "",
    lectures: [],
    course: null,
  });
  const [textLecture, setTextLecture] = useState({
    title: "",
    link: "",
    description: "",
  });
  const [togleSection, setTogleSecton] = useState(true);
  const [togleLecture, setTogleLecture] = useState(false);
  const [temp, setTemp] = useState([]);
  const [disable, setDisable] = useState(false);

  console.log(textSection, "text");

  const handleLecture = (e, i) => {
    let items = [...lecture];
    let item = { ...items[i] };
    item.title = e.target.value;
    items[i] = item;
    setLecture(items);
  };

  const handleSection = (e, i) => {
    let items = [...section];
    let item = { ...items[i] };
    item.title = e.target.value;
    items[i] = item;
    setSection(items);
  };

  const changeLectureInSection = (e, i, j) => {
    let parentItem = [...section];
    let child = { ...parentItem[i] };
    let items = [...child.lectures];
    let item = { ...items[j] };
    item.title = e.target.value;
    items[j] = item;
    child = { ...parentItem[i], lectures: items };
    parentItem[i] = child;
    setSection(parentItem);
  };

  const pushLectureToSection = () => {
    setTextSection({ ...textSection, lectures: lecture });
    setSection([...section, textSection]);
  };

  console.log(section, "ini section cuks");
  if (!localStorage.getItem("jwt")) return <Redirect to="/login" />;
  return (
    <div className="bg-light" style={{ height: "100vh" }}>
      <NavBar />
      <div className="container mt-5 mb-3">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-3"></div>
              <div className="col-6">
                <h4 style={{ fontWeight: "bold" }}>Front End Course</h4>
                <p>
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Button
                  style={{
                    fontSize: 12,
                    color: "#8854d0",
                    borderColor: "#8854d0",
                  }}
                  name="Edit Course"
                  variant="outlined"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card mt-3 mb-5">
          <div className="card-body">
            <div className="d-inline-flex w-100">
              <h4>Curriculum</h4>
              <Button
                name="submit course"
                bgcolor="#8854d0"
                color="white"
                style={{ marginLeft: "auto", fontWeight: 700 }}
              ></Button>
            </div>
            {section.map((sec, j) => (
              <div className="bg-light mx-3 my-4">
                <div className="d-inline-flex w-100">
                  <DragIndicatorOutlinedIcon className="mr-3 mt-3" />
                  <h6
                    style={{ fontWeight: 800, marginTop: 17 }}
                    className="mx-1"
                  >
                    Section {j + 1}:
                  </h6>
                  <h6 style={{ marginTop: 17 }}>{sec.title}</h6>
                </div>
                {sec.lectures.map((lec, i) => (
                  <ExpandPanelLecture
                    key={i}
                    i={i + 1}
                    data={lecture}
                    title={(e) => handleLecture(e, i)}
                  />
                ))}
                <div className="container">
                  {togleLecture ? (
                    <div>
                      <ExpandPanelLecture
                        data={textLecture}
                        title={(e) =>
                          setTextLecture({
                            ...textLecture,
                            title: e.target.value,
                          })
                        }
                      />
                      <Button
                        name="Done"
                        bgcolor="#f0f2f5"
                        style={{
                          fontWeight: 800,
                          marginTop: 10,
                          marginBottom: 15,
                        }}
                        onClick={() => {
                          setLecture([...lecture, textLecture]);
                          console.log(lecture);
                          setTextSection({
                            ...textSection,
                            lectures: [...textSection.lectures, ...lecture],
                          });
                          setTextLecture({
                            title: "",
                            link: "",
                            description: "",
                          });
                          setTogleLecture(false);
                        }}
                        width="100%"
                      ></Button>
                    </div>
                  ) : (
                    <Button
                      name="New Lecture"
                      bgcolor="#f0f2f5"
                      style={{
                        fontWeight: 800,
                        marginTop: 10,
                        marginBottom: 15,
                      }}
                      onClick={() => setTogleLecture(true)}
                      width="100%"
                    ></Button>
                  )}
                </div>
              </div>
            ))}
            {temp.map((sec, j) => (
              <div className="bg-light mx-3 my-4">
                <div className="d-inline-flex w-100">
                  <DragIndicatorOutlinedIcon className="mr-3 mt-3" />
                  <h6
                    style={{ fontWeight: 800, marginTop: 17 }}
                    className="mx-1"
                  >
                    Section {section.length + 1}:
                  </h6>
                  <h6 style={{ marginTop: 17 }}>{sec.title}</h6>
                </div>
                {lecture.map((lec, i) => (
                  <ExpandPanelLecture
                    key={i}
                    i={i + 1}
                    data={lecture[i]}
                    title={(e) => handleLecture(e, i)}
                  />
                ))}
                <div className="container">
                  {togleLecture ? (
                    <div>
                      <ExpandPanelLecture
                        data={textLecture}
                        title={(e) =>
                          setTextLecture({
                            ...textLecture,
                            title: e.target.value,
                          })
                        }
                      />
                      <Button
                        name="Done"
                        bgcolor="#f0f2f5"
                        style={{
                          fontWeight: 800,
                          marginTop: 10,
                          marginBottom: 15,
                        }}
                        onClick={() => {
                          setLecture([...lecture, textLecture]);
                          setTextLecture({
                            title: "",
                            link: "",
                            description: "",
                          });
                          setTogleLecture(false);
                        }}
                        width="100%"
                      ></Button>
                    </div>
                  ) : (
                    <Button
                      name="New Lecture"
                      bgcolor="#f0f2f5"
                      style={{
                        fontWeight: 800,
                        marginTop: 10,
                        marginBottom: 15,
                      }}
                      onClick={() => setTogleLecture(true)}
                      width="100%"
                    ></Button>
                  )}
                </div>
              </div>
            ))}
            <div className="bg-light mx-3 my-4">
              {togleSection && !disable ? (
                <div className="d-inline-flex mb-2 mt-3 w-100">
                  <DragIndicatorOutlinedIcon className="mx-3 mt-3" />
                  <div className="d-inline-flex mr-5 mt-3">
                    <h6 style={{ fontWeight: 800, width: 100 }}>New Section</h6>
                  </div>
                  <Input
                    width="80%"
                    name="e.g learn javascript from scratch"
                    bgcolor="#f0f2f5"
                    onChange={(e) =>
                      setTextSection({ ...textSection, title: e.target.value })
                    }
                  />
                  <Button
                    style={{
                      margin: 10,
                      color: "#8854d0",
                      borderColor: "#8854d0",
                    }}
                    name="Cancle"
                    variant="outlined"
                    onClick={() => setTogleSecton(false)}
                  />
                  <Button
                    style={{
                      margin: 10,
                      borderColor: "#8854d0",
                      width: 200,
                    }}
                    color="white"
                    bgcolor="#8854d0"
                    name="Add Section"
                    variant="filled"
                    onClick={() => {
                      setTemp([""]);
                      setDisable(true);
                    }}
                  />
                </div>
              ) : null}
            </div>
            <div className="bg-light mx-3 my-4">
              {togleSection ? (
                <Button
                  variant="filled"
                  bgcolor="#fbfbfc"
                  color="#8854d0"
                  name="Done"
                  width="100%"
                  onClick={() => {
                    setTextSection({ ...textSection, lectures: lecture });
                    console.log("woi text");
                    setSection([...section, textSection]);
                    setTogleSecton(false);
                    setDisable(false);
                    setTemp([]);
                    setTextSection({ title: "", lectures: [], course: null });
                    setLecture([]);
                  }}
                />
              ) : (
                <Button
                  variant="filled"
                  bgcolor="#fbfbfc"
                  color="#8854d0"
                  name="Add new section"
                  width="100%"
                  onClick={() => setTogleSecton(true)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
