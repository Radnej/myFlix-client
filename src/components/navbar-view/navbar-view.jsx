import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export function NavBar() {
  let user = localStorage.getItem("user");

  const onLoggedOut = () => {
    localStorage.clear();
    window.open("/", "_self");
  };

  const isAuth = () => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("token")) {
      return localStorage.getItem("token");
    } else {
      return false;
    }
  };

  return (
    <Navbar expand="md">
      <Navbar.Brand as={Link} to={"/users"}>
        My-Flix
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-dark" />

      {isAuth() && (
        <Navbar.Collapse id="basic-navbar-nav navbar-dark">
          <Nav className="me-auto">
            <Nav.Link to={`/`}>Hi, {user}</Nav.Link>
            <Nav.Link
              onClick={() => {
                onLoggedOut();
              }}
            >
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      )}
    </Navbar>
  );
}