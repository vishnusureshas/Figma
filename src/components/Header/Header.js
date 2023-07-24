import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="light"  data-bs-theme="light">
        <Container style={{marginLeft:'800px',fontWeight:'bolder'}}>
          <Navbar.Brand href="#home">Green Box</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="product">Shop All</Nav.Link>
            <Nav.Link href="specialization">Special Day</Nav.Link>
            <Nav.Link href="aboutus">About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header