import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCode, FaDesktop, FaCogs } from 'react-icons/fa'; // Import the icons
import '../css/Services.css'; // Import your custom styling
import PricingTable from './PricingTable';
import Portfolio from './Portfolio';
import Testimonials from './Testimonial';
import Contact from './Contact';

const services = [
  {
    title: 'Web Development',
    description: 'Creating responsive and dynamic websites tailored to your needs.',
    icon: <FaCode />,
  },
  {
    title: 'Software Architecture',
    description: 'Designing robust and scalable software architectures for your projects.',
    icon: <FaCogs />,
  },
  {
    title: 'Code Review',
    description: 'Thorough code reviews to ensure code quality and best practices.',
    icon: <FaDesktop />,
  },
  // Add more services
];

const Services = () => {
  return (
    <Container fluid className="services-section">
      <h2 className="section-title">Service Offerings</h2>
      <Row>
        {services.map((service, index) => (
          <Col md={4} key={index} className="service">
            <div className="service-icon">{service.icon}</div> {/* Add the icon */}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </Col>
        ))}
      </Row>
      <PricingTable />
      <Portfolio />
      <Testimonials/>
      <Contact />
    </Container>
  );
}

export default Services;
