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
      <div className="ml-4">
        <Link to="/course/student">
          <img
            alt="logo mejik"
            style={{ marginLeft: 15 }}
            src={Logo}
            height="50"
            width="50"
          />
        </Link>
      </div>
      <div
        className="d-inline-flex"
        style={{ marginRight: 180, marginLeft: 50 }}
      >
        <SearchInput
          width="300px"
          height="40px"
          bgcolor="#f0f2f5"
          color="black"
          name="Search course here ..."
        />
      </div>
      <Link to="/my-course">
        <p
          style={{
            fontWeight: "bold",
            fontSize: 14,
            color: color,
            marginLeft: "auto",
            marginTop: 15,
            marginRight: 15,
          }}
        >
          My Course
        </p>
      </Link>
      {name === "switch to student view" ? (
        <Link style={{ marginLeft: 17, marginRight: 17 }} to="/course/student">
          <Button
            width="225px"
            style={{ fontSize: 12, color: "#8854d0", borderColor: "#8854d0" }}
            name={name}
            variant="outlined"
          />
        </Link>
      ) : (
        <Link
          style={{ marginLeft: 17, marginRight: 17 }}
          to="/course/instructor"
        >
          <Button
            width="225px"
            style={{ fontSize: 12, color: "#8854d0", borderColor: "#8854d0" }}
            name={name}
            variant="outlined"
          />
        </Link>
      )}
      <div className="mx-4">
        <img
          src={image}
          width="50"
          height="50"
          className="rounded border rounded-circle"
        />
      </div>
    </nav>
  );
};

export default TopNavBar;
