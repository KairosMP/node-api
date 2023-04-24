import React from "react";

import Header from "../Header"

import { Container } from "./styles"
import Footer from "../footer";
import VideoList from './../videoList/index';

export default function Layout() {
  return (
    <Container>
      <Header />
      <VideoList />
      <Footer />
    </Container>
  )
}