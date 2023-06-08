import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  return (
    <div>
      <Paper
        component="form"
        onSubmit={() => {}}
        sx={{
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          pl: 2,
          boxshadow: "none",
          mr: { sm: 5 },
        }}
      >
        <input
          className="search-bar"
          placeholder="Search-here..."
          value="fasfa"
          onChange={() => {}}
        />
        <IconButton type="submit" sx={{ p: "10px", color: "red" }} aria-label='search'>
          <SearchIcon />
        </IconButton>
      </Paper>
    </div> // OnSubmit property is just an empty call-back function for now. pl means padding left.
    // mr means margin right and sm means small devices, means we can adjust things for specific size devices
  );
};

export default SearchBar;
