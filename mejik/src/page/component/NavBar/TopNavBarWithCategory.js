import React from "react";

import image from "../../../images/Logo.svg";

import Logo from "../../../images/Logo.svg";
import SearchInput from "../BootstrapInput/BootstrapInput";
import SearchIcon from "@material-ui/icons/Search";
import Button from "../Button/Button";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";

const TopNavBar = ({ color = "black", name }) => {
  return (
    <nav style={{ padding: 0 }} className="navbar navbar-white bg-white">
      <img
        alt="logo mejik"
        style={{ marginLeft: 15 }}
        src={Logo}
        height="50"
        width="50"
      />
      <div className="d-inline-flex">
        <AppsOutlinedIcon />
        <p>Category</p>
      </div>
      <SearchInput
        icon={<SearchIcon />}
        bgcolor="#f0f2f5"
        color="black"
        name="Search course here ..."
      />
      <p style={{ fontWeight: "bold", color: color }}>Instructor</p>
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
