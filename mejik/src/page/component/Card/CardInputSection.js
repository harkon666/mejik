import React from "react";

import Button from "../Button/Button";
import Input from "../BootstrapInput/BootstrapInput";
import DragIndicatorOutlinedIcon from "@material-ui/icons/DragIndicatorOutlined";

const CardInputSection = () => {
  return (
    <div className="d-inline-flex mb-2 mt-3 w-100">
      <DragIndicatorOutlinedIcon className="mx-3 mt-3" />
      <div className="d-inline-flex mr-5 mt-3">
        <h6 style={{ fontWeight: 800, width: 100 }}>New Section</h6>
      </div>
      <Input
        width="80%"
        name="e.g learn javascript from scratch"
        bgcolor="#f0f2f5"
      />
      <Button
        style={{
          margin: 10,
          color: "#8854d0",
          borderColor: "#8854d0",
        }}
        name="Cancle"
        variant="outlined"
      />
      <Button
        style={{
          margin: 10,
          borderColor: "#8854d0",
          width: 200,
        }}
        color="white"
        bgcolor="#8854d0"
        name="Add Section"
        variant="filled"
      />
    </div>
  );
};

export default CardInputSection;
