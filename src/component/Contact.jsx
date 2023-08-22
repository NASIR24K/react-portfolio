import React from 'react';
import { Container, Row, Col, Card, Image, Form, Button } from 'react-bootstrap';
import Img from '../assets/Images/communication.jpg';
import '../css/Contact.css'; // Import your custom styling
import * as Icon from 'react-bootstrap-icons';



const Contact = () => {
  return (
    <Container fluid className="contact-section">
      <h2 className="section-title">Contact</h2>
      <Row>
          <Col md={4} className='contact mt-5'>
          <Card className="contact-card border-0">
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
              <Card.Title>Get in communication</Card.Title>
              <div className="address">
            <Icon.HouseAdd size={40} className='m-2' color='#007bff' />
            <p>Your Address Here</p>
          </div>
          <div className="phone">
            <Icon.Phone size={40} className='m-2' color='#007bff' />
            <p>Phone: +1234567890</p>
          </div>
            </Card.Body>
            <Card.Footer className="text-center">
              <h1 className='text-center'>Contact us</h1>
              <div className="social-icons">
                <a href="https://www.linkedin.com/"><Icon.Linkedin /></a>
                <a href="https://github.com/"><Icon.Github /></a>
                <a href="https://www.skype.com/"><Icon.Skype /></a>
                <a href="https://mail.google.com/"><Icon.Google /></a>
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
              <Button variant="primary"  type="submit">Submit</Button>{' '}
            </div>
          </Form>

        </Col>
      </Row>

    </Container>
  );
}

export default Contact;
