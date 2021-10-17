import React from 'react'
import {Navbar, Nav, Container} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AppBar = () => {
    return (
      <>
      <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
        <Navbar.Toggle />
        <Nav className="ml-auto">
      <Nav.Link href="/cart"><FontAwesomeIcon icon="shopping-cart"/> Cart  </Nav.Link>
      <Nav.Link href="/login"><FontAwesomeIcon className = "mx-1" icon="user"/>User</Nav.Link>
    </Nav>
      
      </Container>
    </Navbar>
    </>
    )
}

export default AppBar
