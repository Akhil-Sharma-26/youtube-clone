import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "../Components/Navbar";
import SearchFeed from "..SearchFeed";
import ChannelDetail from "..ChannelDetail";
import VideoDetail from "../Components/VideoDetail.jsx";
import Feed from "../Components/Feed.jsx";
// import {
//   Navbar,
//   Feed,
//   VideoDetail,
//   ChannelDetail,
//   SearchFeed,
// } from "../Components";
function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" exact element={<VideoDetail />} />
          <Route path="/channel/:id" exact element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
