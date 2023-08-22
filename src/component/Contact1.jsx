import React from 'react';
import { Container, Row, Col, Card, Image, Form, Button } from 'react-bootstrap';
import { Envelope, Phone, GeoAlt, Linkedin, Github, Skype, Google } from 'react-bootstrap-icons';
import '../css/Contact1.css'; // Import your custom CSS for styling
import Img from '../assets/Images/download.jpeg';

const Contact1 = () => {
  return (
    <Container fluid className="contact-container">
      <Row>
        {/* Left Column */}
        <Col md={4}>
          <Card className="contact-card">
            <div className="google-map">
              <a
                href="https://google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={Img}
                  className="card-image"
                  style={{ opacity: 0.3, cursor: 'pointer' }}
                />
                <div className="map-headline">Click to View Map</div>
              </a>
            </div>
            <Card.Body className="text-center">
              <Card.Title>Get in Touch</Card.Title>
              <div className="icons">
                <a href="mailto:your-email@gmail.com"><Envelope /></a>
                <a href="tel:+123456789"><Phone /></a>
                <a href="https://google.com/maps"><GeoAlt /></a>
              </div>
            </Card.Body>
            <Card.Footer className="text-center">
              <div className="social-icons">
                <a href="https://www.linkedin.com/"><Linkedin /></a>
                <a href="https://github.com/"><Github /></a>
                <a href="https://www.skype.com/"><Skype /></a>
                <a href="https://mail.google.com/"><Google /></a>
              </div>
            </Card.Footer>
          </Card>
        </Col>

        <Col md={8} >
          <Form className="contact-form">
          <h1 class="resizable-border">Get in Touch</h1>
            <Form.Group controlId="name" className="mb-3" md>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" required />
            </Form.Group>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Your Email" required />
            </Form.Group>
            <Form.Group controlId="subject" className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Subject" required />
            </Form.Group>
            <Form.Group controlId="message" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your Message" required />
            </Form.Group>
            <div className="text-center">
              <Button variant="primary" type="submit">Submit</Button>
            </div>
          </Form>

        </Col>
      </Row>
    </Container>
  );
};

export default Contact1;
