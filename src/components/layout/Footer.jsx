import React from 'react'
import '../styles/layout/Footer.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <>
    <footer>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src="/images/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-bottom"
            />{' '}
            Transportes
          </Navbar.Brand>
        </Container>
      </Navbar>
      </footer>
    </>
  )
}

export default Footer