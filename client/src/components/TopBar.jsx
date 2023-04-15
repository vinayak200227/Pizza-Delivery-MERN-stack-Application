import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { GiFullPizza } from "react-icons/gi";

const TopBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container fluid>
          <h6
            class="text-light"
            style={{ marginBottom: "0", fontSize: "1.15rem" }}
          >
            <GiFullPizza class="text-warning" size={30} /> &nbsp;&nbsp; PIZZA
            PARADISE
          </h6>
          <Nav className="ms-auto">
            <LinkContainer to="/" activeClassName>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" activeClassName>
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" activeClassName>
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/policy" activeClassName>
              <Nav.Link>terms and conditions</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopBar;
