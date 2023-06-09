import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchFromAPI } from "../Assets/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState("New");
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`);
  }, [selectedCategory]); // useEffect is a life cycle hook which is called when a component is initially loaded
  // To make it dynamic, turn it into a  template string using ``.
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        teryeysy
        <Sidebar
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Hello World
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory}
          <span style={{ color: "#F31503" }}> Videos</span>
        </Typography>
        <Videos />
      </Box>
    </Stack>
  );
};
// px means padding horizopntal
// vh means vertical height
// sx is used for changing the properties dynamically
export default Feed;
