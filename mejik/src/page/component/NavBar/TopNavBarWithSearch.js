import React from "react";

import Logo from "../../../images/Logo.svg";
import SearchInput from "../BootstrapInput/BootstrapInput";
import SearchIcon from "@material-ui/icons/Search";
import Button from "../Button/Button";

const TopNavBar = () => {
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
      <p style={{ fontWeight: "bold" }}>My Course</p>
      <Button name="Switch to instructor view" variant="outlined" />
    </nav>
  );
};

export default TopNavBar;
