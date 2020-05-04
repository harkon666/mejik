import React from "react";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles, withStyles, fade } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";

const Label = withStyles({
  root: {
    "&.MuiFormLabel-root": {
      color: "#b094d7",
    },
    "&.Mui-focused": {
      color: "white",
    },
  },
})(InputLabel);

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    color: "white",
    position: "relative",
    backgroundColor: "#7b4cbc",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const Input = ({ name }) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.margin}>
      <Label shrink htmlFor={name}>
        {name}
      </Label>
      <BootstrapInput placeholder={name} id={name} />
    </FormControl>
  );
};

export default Input;
