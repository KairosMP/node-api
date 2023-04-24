import React, { useEffect, useState } from "react";

import { Container, VideoListWrapper } from "./styles"

import AddVideo from "../addVideo/index";
import Video from "../video/index";

import api from "../../services/api";
 
export default function VideoList() {
  const [videos, setVideos] = useState([])
  
  useEffect(() => {
    api.get('Videos').then(({data}) => {
      setVideos(data.videos)
    })
    console.log(videos)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return(
    <Container>
      <VideoListWrapper>
        {videos?.map((video) => (
          <Video 
          key={video._id}
          id={video._id}
          title={video.title}
          link={video.link}
          liked={video.liked}
        />
        ))}
        <AddVideo />
      </VideoListWrapper>
    </Container>
  )
}