import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/HeroSection.css'; 

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Container className="hero-content">
        <Row>
          <Col md={6} className="text-center mx-auto">
            <h1 className="hero-name text-toUpperCase">Md Nasir Uddin</h1>
            <p className="hero-tagline">Software Engineer | Web Developer</p>
            <p className="hero-tagline">Greetings! I'm excited to present my software engineering 
            journey. Explore projects showcasing my skills in web development and algorithm 
            optimization. Whether you're a developer, collaborator, or simply curious, delve into
             my passion for impactful software. Thank you for visiting, and let's connect over our 
             shared tech interests. Browse my portfolio and explore the world of software engineering.</p>
            <Button href="#projects" variant="primary" size="lg" className="mt-4">
              View Projects
            </Button>
          </Col>
          <Col md={6} className="text-center mx-auto">
            <h1 className="hero-name text-toUpperCase">Md Nasir Uddin</h1>
            <p className="hero-tagline">Software Engineer | Web Developer</p>
            <p className="hero-tagline">Greetings! I'm excited to present my software engineering 
            journey. Explore projects showcasing my skills in web development and algorithm 
            optimization. Whether you're a developer, collaborator, or simply curious, delve into
             my passion for impactful software. Thank you for visiting, and let's connect over our 
             shared tech interests. Browse my portfolio and explore the world of software engineering.</p>
            <Button href="#projects" variant="primary" size="lg" className="mt-4">
              View Projects
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
