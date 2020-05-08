import React from 'react'

import Input from "../BootstrapInput/BootstrapInput";
import DragIndicatorOutlinedIcon from "@material-ui/icons/DragIndicatorOutlined";
import Button from '../Button/Button'

import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const ExpandPanelLecture = ({data, title, onClick}) => {
    console.log(data)
    return <ExpansionPanel onClick={onClick} style={{backgroundColor: 'white'}}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="bg-light border-bottom border-light"
        >
            <DragIndicatorOutlinedIcon className="mr-3 mt-3" />
          <h6 style={{ fontWeight: 800, marginTop: 17 }} className="mx-1">
            Section 2:
          </h6>
          <h6>{data.title}</h6>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ padding: 0, margin: 1 }}>
        <div className="bg-light mx-3 my-4">
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
                  onChange={title}
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
            <div className="row mt-3">
              <div className="col">
                <Button
                  onClick={onClick}
                  bgcolor="#f0f2f5"
                  color="black"
                  name="Done"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
}

export default ExpandPanelLecture