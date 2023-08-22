import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/Home.css';
import Image from '../assets/Images/01725874024.JPG';
import Contact from './Contact';
import Testimonial from './Testimonial';
import Portfolio from './Portfolio';
import TextAnimation from './Animate'; 

const Home = () => {
  return (
    <section className="hero-section">
      <Container fluid className="hero-content">
        <Row>
          <Col md={6} sm={12} lg={6} className="text-center">
       <TextAnimation />
       <Button href="#projects" variant="primary" size="lg">
              View Projects
            </Button>
          </Col>
          <Col md={6} sm={12} lg={6} className="image-column">
            <img src={Image} alt="Profile" className="profile-image" />
          </Col>
        </Row>
      </Container>

      <Portfolio />
      <Testimonial />
      <Contact />
    </section>
  );
};

export default Home;
