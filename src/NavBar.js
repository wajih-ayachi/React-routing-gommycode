import React from 'react'
import { NavLink } from "react-router-dom";
import {Navbar, Container, Nav} from 'react-bootstrap'


export default function NavBar() {
    return (
        <div>
             <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">TD-REACT</Navbar.Brand>
    <Nav className="me-auto">
      <NavLink className="nav-link"to="/">ACCUEIL</NavLink>
      <NavLink className="nav-link" to="Users">UTILISATEURS</NavLink>
      <NavLink className="nav-link" to="Comments">COMMENTAIRES</NavLink>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}
