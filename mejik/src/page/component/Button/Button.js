import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const CostumeButton = ({ name, variant, bgcolor, color }) => {
  const ColorButton = withStyles((theme) => ({
    root: {
      //   color: "black",
      color: color,
      width: "325px",
      marginRight: 0,
      //   backgroundColor: "#fac024",
      backgroundColor: bgcolor,
      "&:hover": {
        backgroundColor: "#fac024",
      },
    },
  }))(Button);

  const classes = useStyles();
  return <ColorButton variant={variant}>{name}</ColorButton>;
};

export default CostumeButton;
