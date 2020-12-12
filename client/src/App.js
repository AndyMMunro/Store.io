import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "./components/Container";
import LoginForm from "./components/LoginForm/LoginForm";


function App() {
  // console.log("hope this works");
  return (
    <Router>
          <Container>
            <Nav />
              <Route exact path="/LoginForm" component={LoginForm} />
          </Container>
    </Router>
  );
}

export default App;