import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../Assets/constants";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems={"center"}
      p={2}
      sx={{
        // position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      
      <Link to='/' style={{display:'flex',alignItems:'center'}}>
        <img src={logo} alt="logo" height={45} sx={{innerWidth:"100%"}}/>
      </Link>
      <SearchBar/>
    </Stack> // p means padding, sx prompt is used to give any style to material ui components. This can be learned for any component of materialUI from there documentation. Just hover over that component and go over the 'demo' or 'API' section.
    // Stack is like div. Can learn more about it in its docs
    
  );
};

export default Navbar;
