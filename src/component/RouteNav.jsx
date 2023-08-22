import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import MyImage from '../assets/Images/Capture.PNG';

const Navigation = () => {
  return (
    <Navbar className="shadow-lg" style={{ backgroundColor: '#ddd' }} expand="lg">
      <Navbar.Brand href="#home" style={{ color: 'white', marginLeft: '10px' }}>
        <Image src={MyImage} height="50" alt="" loading="lazy" roundedCircle />
        NFSoft
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
        <Nav>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
          <Nav.Link as={Link} to="/blog">Blogs</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
