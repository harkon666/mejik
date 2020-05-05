import React from "react";

import {
  withStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const theme = createMuiTheme({
  overrides: {
    MuiFormControlLabel: {
      label: {
        fontSize: 13,
      },
    },
  },
});

const TransCheckbox = withStyles({
  root: {
    color: "white",
    "&$checked": {
      color: "white",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

// Inspired by blueprintjs
function StyledCheckbox({ labelName }) {
  const [state, setState] = React.useState({
    checked: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <ThemeProvider theme={theme}>
      <FormControlLabel
        style={{ fontSize: "13px" }}
        control={
          <TransCheckbox
            checked={state.checked}
            onChange={handleChange}
            name="checked"
          />
        }
        label={labelName}
      />
    </ThemeProvider>
  );
}

const CostumeCheckbox = ({ labelName }) => {
  return (
    <div>
      <StyledCheckbox labelName={labelName} />
    </div>
  );
};

export default CostumeCheckbox;
