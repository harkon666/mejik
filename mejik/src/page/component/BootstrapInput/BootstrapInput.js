import React from "react";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles, withStyles, fade } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";

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
  labelColor,
  width,
}) => {
  const classes = useStyles();
  const Icon = icon;

  const BootstrapInput = makeStyles((theme) => ({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
      borderRadius: 4,
      color: color,
      fontSize: 16,
      backgroundColor: bgcolor,
      width: width,
      padding: "10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      "&:focus": {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));

  const Label = withStyles({
    root: {
      "&.MuiFormLabel-root": {
        color: labelColor,
        fontWeight: 800,
      },
      "&.Mui-focused": {
        color: labelColor,
      },
    },
  })(InputLabel);

  const inputStyle = BootstrapInput();

  return label ? (
    <FormControl style={{ width: width }} className={classes.margin}>
      <Label shrink htmlFor={label}>
        {label}
      </Label>
      <InputBase
        className={inputStyle.root}
        placeholder={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </FormControl>
  ) : (
    <FormControl style={{ width: width }} className={classes.margin}>
      <InputBase
        className={inputStyle.root}
        placeholder={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </FormControl>
  );
};

export default Input;
