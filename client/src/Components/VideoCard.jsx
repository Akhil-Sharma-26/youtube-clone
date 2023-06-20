import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../Assets/constants";
// Below here, we are destructuring the id and then again videoID and then we are destructuring the snippet
const VideoCard = ({ video: { id: { videoId }, snippet } }) => ( // Card media contains image of thumbnail,
// Link component must have a To property
// here, To: If videoId exists(?) then go to the video/id, if not exist then go to demovidURL
// in the alt property then it shows the title a/c too the snippet.
// ? Learn how to set the size acordingly from any other source...
// Cardcontent is actually the Card that is holding the photo, title, channel etc. and inside it we are using typography to type our Title upto 60 characters using slice property || if the title doesn't exit then render DemoTitle
// Now in the cardContent we are poiinting to the channelID instead of videoID. using the same logic as CardMedia. CheckCircle is nothing but the veriffied
// The outterMost Card, we are fixing the size of the Card so that it doesn't expands much
  <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
      <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
        sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
      /> 
    </Link>
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);
// Adding a link inside a card makes the whole card clickable
// if the title doesn't exist then we render demoVideoTitle which prints 60 characters using slice function.
// CheckCircle

export default VideoCard