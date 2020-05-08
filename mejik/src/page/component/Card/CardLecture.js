import React from 'react'

import Input from "../BootstrapInput/BootstrapInput";
import DragIndicatorOutlinedIcon from "@material-ui/icons/DragIndicatorOutlined";

const CardLecture = () => {
    return <div className="bg-light mx-3 my-4">
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
}

export default CardLecture