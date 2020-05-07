import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { Redirect } from "react-router-dom";

import Input from "../BootstrapInput/BootstrapInput";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import UploadButton from "@material-ui/core/Button";
import Button from "../Button/Button";
import { Card } from "react-bootstrap";

const CREATE_COURSE = gql`
  mutation createCourse($title: String!, $cover: Upload, $description: String) {
    createCourse(
      input: { title: $title, cover: $cover, description: $description }
    ) {
      title
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "50%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal({ open, handleClose }) {
  const classes = useStyles();
  const [createCourse] = useMutation(CREATE_COURSE);

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [nameCourse, setNameCourse] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [success, setSuccess] = useState(false);

  const CreateCourse = async () => {
    try {
      let data = await createCourse({
        variables: {
          title: nameCourse,
          description: descriptions,
        },
      });
      return data;
    } catch (error) {
      return error;
    }
  };

  //   const upload = (id, file) => {
  //     const formData = new FormData();
  //     formData.append("id", id);
  //     formData.append("payment", file);
  //   };
  if (success) return <Redirect to="/course/create" />;
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Create New Course</h2>
            <Input
              width="100%"
              label="Course Title"
              bgcolor="#b3c4be"
              color="black"
              name="e.g learn javascript"
              labelColor="black"
              onChange={(e) => setNameCourse(e.target.value)}
            />
            <Input
              width="100%"
              height="120px"
              label="Descriptions"
              bgcolor="#b3c4be"
              color="black"
              name="e.g easy js course"
              labelColor="black"
              onChange={(e) => setDescriptions(e.target.value)}
            />
            <Card className="bg-dark text-white ml-2 mt-4">
              <Card.Img
                alt="Attachment card"
                style={{ height: "180px" }}
                src={preview}
              />
              <Card.ImgOverlay></Card.ImgOverlay>
            </Card>
            <h4 className="text-black text-center">
              <form style={{ marginTop: 8 }} enctype="multipart/form-data">
                <input
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                  style={{ display: "none" }}
                  name="payment"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                    setPreview(URL.createObjectURL(e.target.files[0]));
                  }}
                />
                <label
                  style={{ marginTop: 8, marginBottom: 30 }}
                  htmlFor="contained-button-file"
                >
                  <UploadButton
                    variant="contained"
                    color="white"
                    className="bg-primary"
                    component="span"
                    style={{ width: "335px" }}
                  >
                    Upload
                  </UploadButton>
                </label>
              </form>
            </h4>
            <div className="d-inline-flex w-100">
              <Button
                style={{
                  fontSize: 12,
                  color: "#8854d0",
                  borderColor: "#8854d0",
                  marginLeft: "auto",
                }}
                name="cancle"
                variant="outlined"
              />
              <Button
                style={{ marginLeft: 10 }}
                name="New Course"
                color="white"
                bgcolor="#8854d0"
                onClick={async () => {
                  let data = await CreateCourse();
                  if (data) {
                    console.log(data, "success");
                    setSuccess(true);
                  } else {
                    console.log("error");
                  }
                }}
              />
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
