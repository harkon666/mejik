import React from "react";
import {Redirect} from 'react-router-dom'

//component
import NavBar from "./component/NavBar/TopNavBar";
import Button from "./component/Button/Button";
import Input from "./component/BootstrapInput/BootstrapInput";

//material icon
import DragIndicatorOutlinedIcon from "@material-ui/icons/DragIndicatorOutlined";

const CreateCourse = () => {
  if (!localStorage.getItem('jwt')) return <Redirect to="/login" /> 

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
            <div className="bg-light mx-3 my-4">
              <div className="d-inline-flex my-2 w-100">
                <DragIndicatorOutlinedIcon className="mx-3" />
                <h6 style={{ fontWeight: 800 }} className="mx-1">
                  Section 1:
                </h6>
                <p>Course Overview - Start Here!</p>
              </div>
              <div className="container">
                <div className="d-inline-flex mb-2 mt-3 w-100 bg-white">
                  <DragIndicatorOutlinedIcon className="mx-3 mt-3" />
                  <p style={{ fontWeight: 800 }} className="mx-1 mt-3">
                    Lecture 1:
                  </p>
                  <p className="mt-3">How To Get Help</p>
                </div>
                <Button
                  name="New Lecture"
                  bgcolor="#f0f2f5"
                  style={{
                    fontWeight: 800,
                    marginTop: 10,
                    marginBottom: 15,
                  }}
                  width="100%"
                ></Button>
              </div>
            </div>
            <div className="bg-light mx-3 my-4">
              <div className="d-inline-flex mb-2 mt-3 w-100">
                <DragIndicatorOutlinedIcon className="mx-3" />
                <h6 style={{ fontWeight: 800 }} className="mx-1">
                  Section 2:
                </h6>
                <h6>Server Side Architecture</h6>
              </div>
              <div className="card-body">
                <div className="container bg-white">
                  <div className="row">
                    <div className="col-1 mt-3">
                      <DragIndicatorOutlinedIcon />
                    </div>
                    <div className="col">
                      <div className="row mt-3">
                        <div className="col-8">
                          <Input
                            bgcolor="#f0f2f5"
                            color="black"
                            name="Search course here ..."
                            label="Lecture title"
                            labelColor="black"
                            width="100%"
                          />
                        </div>
                        <div className="col-4">
                          <Input
                            bgcolor="#f0f2f5"
                            color="black"
                            name="Search course here ..."
                            label="Thumbnail"
                            type="file"
                            labelColor="black"
                            width="100%"
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col">
                          <Input
                            bgcolor="#f0f2f5"
                            color="black"
                            name="Embbed link video"
                            label="Insert Embbed link video"
                            labelColor="black"
                            width="100%"
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col">
                          <Input
                            bgcolor="#f0f2f5"
                            color="black"
                            name="Briefly describe this course"
                            label="DesCription"
                            labelColor="black"
                            width="100%"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-light mx-3 my-4">
              <div className="d-inline-flex mb-2 mt-3 w-100">
                <DragIndicatorOutlinedIcon className="mx-3 mt-3" />
                <div className="d-inline-flex mr-5 mt-3">
                  <h6 style={{ fontWeight: 800, width: 100 }}>New Section</h6>
                </div>
                <Input
                  width="80%"
                  name="e.g learn javascript from scratch"
                  bgcolor="#f0f2f5"
                />
                <Button
                  style={{
                    margin: 10,
                    color: "#8854d0",
                    borderColor: "#8854d0",
                  }}
                  name="Cancle"
                  variant="outlined"
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
                />
              </div>
            </div>
            <div className="bg-light mx-3 my-4">
              <Button
                variant="filled"
                bgcolor="#fbfbfc"
                color="#8854d0"
                name="Add new section"
                width="100%"
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
