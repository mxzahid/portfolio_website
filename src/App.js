import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import HomePage from "./MyPages/HomePage";
import AboutPage from "./MyPages/AboutPage";
import ContactPage from "./MyPages/ContactPage";
import SkillPage from "./MyPages/SkillPage"
class App extends Component {
  constructor(props) {
    super();
    {
      this.state = {
        title: "ABDULLAH ZAHID",
        headerLinks: [
          { title: "Home", path: "/" },
          { title: "About", path: "/" },
          { title: "Contact", path: "/" },
          { title: "Skills", path: "/" }
        ],

        home: {
          mainHeader: "Nothing == Impossible",
          subHeader: "Solving Problems through Programming",
          subText: "Check it out below!",
        },
        about: {
          mainHeader: "Who Am I?",
        },
        contact: {
          mainHeader: " with me.",
          last: "True"
        },
        skills: {
          mainHeader: "My Strengths"
        }
      };
    }
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar
            className="border-bottom"
            bg="transparent"
            expand="lg"
            variant="dark"
          >
            <Navbar.Brand style={{ color: "#C5C1C0" }}>
              Abdullah Zahid
            </Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link style={{ color: "#C5C1C0" }} className="nav-link" to="/">
                  Home
                </Link>
                <Link
                  style={{ color: "#C5C1C0" }}
                  className="nav-link"
                  to="/contact"
                >
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route
            path="/"
            exact
            render={() => (

              <HomePage
                mainHeader={this.state.home.mainHeader}
                subHeader={this.state.home.subHeader}
                subText={this.state.home.subText}
              />
            )}
          />
          <Route
            path="/about"
            render={() => (
              <AboutPage mainHeader={this.state.about.mainHeader} />
            )}
          />
          <Route
            path="/contact"
            render={() => (
              <ContactPage
                mainHeader={this.state.contact.mainHeader}
                last={this.state.contact.last}
              />
            )}
          />
          <Route
            path="/skills"
            render={() => (
              <SkillPage mainHeader={this.state.skills.mainHeader} />
            )}
          />


        </Container>
      </Router>
    );
  }
}
export default App;
