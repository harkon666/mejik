import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";

//icon
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import MinimizeOutlinedIcon from "@material-ui/icons/MinimizeOutlined";

const ExpansionPanel = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

export default function CustomizedExpansionPanels({ data }) {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {data.map((val) => (
        <ExpansionPanel
          square
          expanded={expanded === val.id}
          onChange={handleChange(val.id)}
          className="my-3"
          key={val.id}
        >
          <ExpansionPanelSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <AddOutlinedIcon className="mr-2" />
            <Typography style={{ fontWeight: "bold" }}>{val.title}</Typography>
            <Typography style={{ marginLeft: "auto" }}>
              {val.lectures.length} Lectures
            </Typography>
            <Typography
              className="text-ligth"
              style={{ marginLeft: 125, marginRight: 15 }}
            >
              N/A
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ padding: 0, margin: 1 }}>
            <ul className="list-group list-group-flush w-100">
              <li className="list-group-item">Woi</li>
              <li className="list-group-item">Woi</li>
              <li className="list-group-item">Woi</li>
            </ul>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
}
