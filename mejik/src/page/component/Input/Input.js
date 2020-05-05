import React from "react";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles, withStyles, fade } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";

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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const Input = ({
  type,
  name,
  value,
  onChange,
  icon = null,
  bgcolor,
  color,
  label = null,
}) => {
  const classes = useStyles();
  const Icon = icon;

  const BootstrapInput = withStyles((theme) => ({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      color: color,
      marginLeft: 5,
      position: "relative",
      fontSize: 16,
      backgroundColor: bgcolor,
      width: "300px",
      padding: "10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      "&:focus": {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }))(InputBase);

  return (
    <FormControl className={classes.margin}>
      <Label shrink htmlFor={label}>
        {label}
      </Label>
      <BootstrapInput
        type={type}
        value={value}
        onChange={onChange}
        placeholder={name}
        id={label}
      />
    </FormControl>
  );
};

export default Input;
