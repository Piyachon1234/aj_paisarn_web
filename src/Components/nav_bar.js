import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
    return (
        <>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>CCTV</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" style={{ cursor: 'pointer' }}>Home</Nav.Link>
          </Nav>
        </Container>
        </Navbar>

        <Outlet />
        </>
    )
}

export default NavBar;