import React, {useContext} from "react";

import {
  Overlay,
  Container,
  Header,
  FormContainer,
  FormMain,
  InputGroup,
  FormFooter,
  CloseIcon,
  CheckIcon
} from './styles'
import { VideoContext } from "../../contexts/videoContext";

export default function FormModal() {
  const {
    handleSubmit,
    handleClose, 
    titleHandler, 
    linkHandler,
    title, 
    link, 
  } = useContext(VideoContext)
  
  return (
    <Overlay>
      <Container>
        <Header>
          <strong>Add a video</strong>
          <button type="button" onClick={handleClose}>
            <CloseIcon />
          </button>
        </Header>
        <FormContainer onSubmit={handleSubmit}>
          <FormMain>
            <InputGroup>
            <label htmlFor="title">Title</label>
            <input id="title" type="text" value={title} onChange={titleHandler}/>
            </InputGroup>
            <InputGroup>
            <label htmlFor="link">Link</label>
            <input id="link" type="text" value={link} onChange={linkHandler}/>
            </InputGroup>
          </FormMain>
          <FormFooter>
            <button type="submit">
              <CheckIcon />
            </button>
          </FormFooter>
        </FormContainer>
      </Container>
    </Overlay>
  )
}