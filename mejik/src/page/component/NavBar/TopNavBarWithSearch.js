import React from "react";
import { Link } from "react-router-dom";

import image from "../../../images/Logo.svg";

import Logo from "../../../images/Logo.svg";
import SearchInput from "../BootstrapInput/BootstrapInput";
import SearchIcon from "@material-ui/icons/Search";
import Button from "../Button/Button";

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
      <SearchInput
        icon={<SearchIcon />}
        bgcolor="#f0f2f5"
        color="black"
        name="Search course here ..."
      />
      <p style={{ fontWeight: "bold", color: color }}>My Course</p>
      {name === "switch to student view" ? (
        <Link to="/course/student">
          <Button
            width="225px"
            style={{ fontSize: 12, color: "#8854d0", borderColor: "#8854d0" }}
            name={name}
            variant="outlined"
          />
        </Link>
      ) : (
        <Link to="/course/instructor">
          <Button
            width="225px"
            style={{ fontSize: 12, color: "#8854d0", borderColor: "#8854d0" }}
            name={name}
            variant="outlined"
          />
        </Link>
      )}
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
