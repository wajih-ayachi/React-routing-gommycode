import React from 'react'
import { NavLink } from "react-router-dom";
import {Navbar, Container, Nav} from 'react-bootstrap'


export default function NavBar() {
    return (
        <div>
             <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Gomycode</Navbar.Brand>
    <Nav className="me-auto">
      <NavLink className="nav-link"to="/">Home</NavLink>
      <NavLink className="nav-link" to="Apropos">apropos</NavLink>
      <NavLink className="nav-link" to="Taches">taches</NavLink>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}
