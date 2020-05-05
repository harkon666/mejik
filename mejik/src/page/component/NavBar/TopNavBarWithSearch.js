import React from "react";

import image from "../../../images/Logo.svg";

import Logo from "../../../images/Logo.svg";
import SearchInput from "../BootstrapInput/BootstrapInput";
import SearchIcon from "@material-ui/icons/Search";
import Button from "../Button/Button";

const TopNavBar = ({ color = "black" }) => {
  return (
    <nav style={{ padding: 0 }} className="navbar navbar-white bg-white">
      <img
        alt="logo mejik"
        style={{ marginLeft: 15 }}
        src={Logo}
        height="50"
        width="50"
      />
      <SearchInput
        icon={<SearchIcon />}
        bgcolor="#f0f2f5"
        color="black"
        name="Search course here ..."
      />
      <p style={{ fontWeight: "bold", color: color }}>My Course</p>
      <Button
        width="225px"
        style={{ fontSize: 12, color: "#8854d0", borderColor: "#8854d0" }}
        name="Switch to instructor view"
        variant="outlined"
      />
      <img
        src={image}
        width="50"
        height="50"
        className="rounded border rounded-circle"
      />
    </nav>
  );
};

export default TopNavBar;
