// ! Logic
  //  if category.name is equal to selectedCategory then(&&) have color #FC... else white color

import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../Assets/constants";
// const selectedCategory = "New";  It si of no use now as it is coming from props
const Categories = ({ selectedCategory, setSelectedCategory }) => ( // Please Take care of {} brackets in React. Took a day to resolve an error here.
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#FC1503",
          color: "white",
        }}
        key={category.name}
      >
        <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
          {category.icon}
        </span>
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;