import React from 'react'
import { Stack,Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
const Videos = ({videos,direction}) => {
  // console.log(videos)
  if (!videos) {
    return null; // or any other appropriate handling for null/empty case
  } // Either do above method OR
  if(!videos?.length) return 'loading...';
  return (
    <Stack direction={direction||'row'} flexWrap='wrap' justifyContent='start' gap={2}>
      {videos.map((item,idx)=>(
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard chanelDetail={item}/>}
        </Box> // If a item has an Id and if it points to a video then render a videocard with prop of 'item'.
      ))}
    </Stack>
  )
}

export default Videos
