import React from "react";

import image from "../../../images/Logo.svg";

import Logo from "../../../images/Logo.svg";

const TopNavBarWithTitle = ({ color = "black", title }) => {
  return (
    <nav style={{ padding: 0 }} className="navbar navbar-white bg-white">
      <div className="d-inline-flex">
        <img
          alt="logo mejik"
          style={{ marginLeft: 50 }}
          src={Logo}
          height="50"
          width="50"
        />
        <h5 style={{ fontWeight: "bold", marginLeft: 50, marginTop: 15 }}>
          {title}
        </h5>
        <p
          style={{
            fontWeight: "bold",
            color: color,
            marginLeft: "auto",
            marginTop: 15,
          }}
        >
          My Course
        </p>
        <img
          style={{ marginLeft: 30, marginRight: 30 }}
          src={image}
          width="50"
          height="50"
          className="rounded border rounded-circle"
        />
      </div>
    </nav>
  );
};

export default TopNavBarWithTitle;
