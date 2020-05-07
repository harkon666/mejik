import React from "react";
import { Link, useParams } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleExpansionPanel({ data }) {
  const classes = useStyles();
  const { id1 } = useParams();
  console.log(id1, "woiiiiiiiiii");
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="bg-light border-bottom border-light"
        >
          <Typography className={classes.heading}>{data.title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ padding: 0, margin: 1 }}>
          <ul className="list-group list-group-flush w-100">
            {data.lectures.map((list) => (
              <Link
                key={list.id}
                to={`/course/watch/${data.course.id}/${list.id}`}
              >
                <li key={list.id} className="list-group-item">
                  {list.title}
                </li>
              </Link>
            ))}
          </ul>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
