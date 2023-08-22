import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import Navigation from './component/Navigation';
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import Blogs from './component/Blogs';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <Router>
      <Navigation /> {/* Your navigation component */}
      <Container>
        <Routes>
          <Route path="/" component={<Home />} />
          <Route path="/about" component={<About />} />
          <Route path="/services" component={<Services />} />
          <Route path="/blogs" component={<Blogs />} />
          <Route path="/contact" component={<Contact />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
