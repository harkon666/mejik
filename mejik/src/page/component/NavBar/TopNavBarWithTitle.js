import React from "react";

import image from "../../../images/Logo.svg";

import Logo from "../../../images/Logo.svg";
import SearchInput from "../BootstrapInput/BootstrapInput";
import SearchIcon from "@material-ui/icons/Search";

const TopNavBarWithTitle = ({ color = "black" }) => {
  return (
    <nav style={{ padding: 0 }} className="navbar navbar-white bg-white">
      <img
        alt="logo mejik"
        style={{ marginLeft: 15 }}
        src={Logo}
        height="50"
        width="50"
      />
      <h5 style={{ fontWeight: "bold" }}>Course Front End Dev 2020</h5>
      <p style={{ fontWeight: "bold", color: color }}>My Course</p>
      <img
        src={image}
        width="50"
        height="50"
        className="rounded border rounded-circle"
      />
    </nav>
  );
};

export default TopNavBarWithTitle;
