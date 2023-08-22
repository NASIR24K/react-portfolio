import React from 'react';
import { Breadcrumb, Button } from 'react-bootstrap';
import '../assets/sass/App.scss';

const HeroSection = () => {
  return (
    <Breadcrumb className="hero-section">
      <div className="hero-content">
        <h1>Unlocking Innovation through Code</h1>
        <p>Browse my portfolio and explore the world of software engineering.</p>
        <Button variant="primary" href="/portfolio">View Portfolio</Button>
      </div>
    </Breadcrumb>
  );
}

export default HeroSection;
