// App.js

import React from "react";
import {Navbar, Nav, Image} from 'react-bootstrap';
import {
 BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";
import MyImage from './assets/Images/food4.jpg';
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import Blog from "./component/Blogs";
import Contact from './component/Contact';
import Footer from "./component/Footer";

function App() {
  return (
    <BrowserRouter>
    <div className="main-container" style={{ backgroundColor: "#ccc" }}>
        <>
        <Navbar className="shadow-lg" style={{ backgroundColor: '#ddd' }} expand="lg">
      <Navbar.Brand  as={Link} to="/" style={{ color: 'white', marginLeft: '10px' }}>
        <Image src={MyImage} height="50" alt="" loading="lazy" roundedCircle />
        NFSoft
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
        <Nav>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
          <Nav.Link as={Link} to="/blog">Blogs</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
    <div>
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
     
    </div>
    <Footer />
    </div>
    </BrowserRouter>
 
    
  );
}

export default App;
