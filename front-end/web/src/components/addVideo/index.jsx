import React, { useContext } from "react";

import { VideoContext } from "../../contexts/videoContext";

import { AddVideoButton, AddIcon} from "./styles"

export default function AddVideo() {
  const {handleAdd} = useContext(VideoContext)

  return (
    <li>
      <AddVideoButton onClick={handleAdd}>
        <AddIcon />
      </AddVideoButton>
    </li>
  )
}