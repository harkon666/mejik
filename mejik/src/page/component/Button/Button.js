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

const CostumeButton = ({
  name,
  variant,
  bgcolor,
  color,
  width,
  style,
  onClick,
}) => {
  const ColorButton = withStyles((theme) => ({
    root: {
      color: color,
      width: width,
      marginRight: 0,
      backgroundColor: bgcolor,
      "&:hover": {
        backgroundColor: "#fac024",
      },
    },
  }))(Button);

  const classes = useStyles();
  return (
    <ColorButton style={style} variant={variant} onClick={onClick}>
      {name}
    </ColorButton>
  );
};

export default CostumeButton;
