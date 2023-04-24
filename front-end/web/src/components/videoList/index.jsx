import React from "react";

import { Container, VideoListWrapper } from "./styles"

import AddVideo from "../addVideo/index";
import Video from "../video/index";
 
export default function VideoList() {
  return(
    <Container>
      <VideoListWrapper>
        <Video 
          id={1}
          title="Title test"
          link="https://youtu.be/ExNSl9CKcPQj"
          liked={true}
        />
        <AddVideo />
      </VideoListWrapper>
    </Container>
  )
}