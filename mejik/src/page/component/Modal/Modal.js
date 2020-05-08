import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { Redirect, Link} from "react-router-dom";

import Input from "../BootstrapInput/BootstrapInput";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import IconButton from '@material-ui/core/IconButton';
import CloudUpload from '@material-ui/icons/CloudUpload'
import Button from "../Button/Button";
import { Card } from "react-bootstrap";

const CREATE_COURSE = gql`
  mutation createCourse($title: String!, $cover: Upload, $description: String) {
    createCourse(
      input: { title: $title, cover: $cover, description: $description }
    ) {
      id
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
  const [id, setId] = useState(null)

  const CreateCourse = async () => {
    try {
      let data = await createCourse({
        variables: {
          title: nameCourse,
          description: descriptions,
          cover: null 
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

  if (success) return <Redirect to={`/course/create/${id}`} />;
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
            <h4 className="text-black text-center">
            {file ? <Card className="bg-dark text-white ml-2 mt-4" style={{ height: 200, weight: 150, marginRight: 115 }}>
              <Card.Img
              style={{height: 200, weight: 150}}
                alt="Attachment card"
                src={preview}
              />
              <Card.ImgOverlay />
            </Card> : 
              <form style={{ marginTop: 8 }} enctype="multipart/form-data">
                <input
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                  style={{ display: "none" }}
                  name="payment"
                  onChange={(e) => {
                    // const [filed] = e.target.files
                    // console.log(URL.createObjectURL(filed).split(':').splice(1,3).join(':'))
                    // setFile(URL.createObjectURL(filed).split(':').splice(1,3).join(':'));
                    // setPreview(URL.createObjectURL(e.target.files[0]));
                  }}
                />
                <label
                  style={{ marginTop: 8, marginBottom: 30 }}
                  htmlFor="contained-button-file"
                >
                  <div style={{ borderStyle: 'solid', borderColor: '#8854d0' , height: 200, weight: 150, marginRight: 115}}>
                  <IconButton variant="outlined"
                  style={{color: '#8854d0', borderColor: '#8854d0', borderWidth: 'thick', marginTop: '25%'}
                  }
                   aria-label="upload picture" component="span">
                    <CloudUpload />
                    Upload Cover Here
                  </IconButton>
                  </div>
                </label>
              </form> }
              
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
                  if (data.data) {
                    setId(data.data.createCourse.id)
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
