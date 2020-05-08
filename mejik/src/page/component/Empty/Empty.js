import React, { useState } from "react";

import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const Empty = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ height: "100vh", textAlign: "center" }}>
      <h1
        style={{
          fontWeight: "bolder",
          marginTop: "240px",
        }}
      >
        Your Course is Empty
      </h1>
      <Button
        style={{ marginTop: 20 }}
        bgcolor="#8854d0"
        color="white"
        name="Add Your Own Course"
        onClick={() => setOpen(true)}
      ></Button>
      <Modal open={open} handleClose={() => setOpen(false)} />
    </div>
  );
};

export default Empty;
