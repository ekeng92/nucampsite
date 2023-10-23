import React from "react";
import { Container } from "reactstrap";
import DisplayList from "../features/display/DisplayList";
import Subheader from "../components/Subheader";

const HomePage = () => {
  return (
    <Container>
      <Subheader current="Home" />
      <DisplayList />
    </Container>
  );
};

export default HomePage;
