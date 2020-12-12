import React from "react";
import { Router } from "react-router-dom";
import Container from "../components/Container";
import LoginForm from "../components/LoginForm"
import Wrapper from "../components/Wrapper"

function Home () {

return (
  <Router>
    <Container style={{ minHeight: "100vh" }}>
        <Wrapper>
          <LoginForm/>
        </Wrapper>
    </Container>
  </Router>
    );

};

export default Home;