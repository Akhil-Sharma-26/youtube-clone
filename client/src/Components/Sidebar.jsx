import React from "react";
import { Button, Stack } from "@mui/material";
import { categories } from "../Assets/constants";
const selectedCategory = "New";
const Sidebar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <Button
          className="category-btn"
          style={{
            background: category.name === selectedCategory && "#FC1503",
            color: "white",
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </Button>
      ))}
    </Stack>
  );
  // ! Logic
  //  if category.name is equal to selectedCategory then(&&) have color #FC... else white color
};

export default Sidebar;
