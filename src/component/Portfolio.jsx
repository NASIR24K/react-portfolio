import React from 'react';
import { Container, Row, Col, Card, Button, Modal, Carousel } from 'react-bootstrap';

import AOS from 'aos';

import '../css/Portfolio.css'; // Import your custom styling
import Image1 from '../assets/Images/communication.jpg';
import Image2 from '../assets/Images/communication.jpg';
import Image3 from '../assets/Images/communication.jpg';
import Image4 from '../assets/Images/communication.jpg';

const projects = [
  {
    id: 1,
    title: 'Web Development Project 1',
    category: 'Web Development',
    thumbnail: {Image1},
    images: [Image1, Image2, Image3, Image4], // Array of project images
    description: 'A description of the project.',
    technologies: ['React', 'Node.js', 'Express'],
    challenges: 'Challenges faced during development.',
    outcome: 'The positive outcomes and results of the project.',
    website: 'https://www.project-website.com', // Link to the project website
  },
  {
    id: 2,
    title: 'Web Development Project 2',
    category: 'Web Development',
    thumbnail: {Image2},
    images:[Image1, Image2, Image3, Image4],
    description: 'A description of the project.',
    technologies: ['React', 'Node.js', 'Express'],
    challenges: 'Challenges faced during development.',
    outcome: 'The positive outcomes and results of the project.',
    website: 'https://www.project-website.com',
  },
  // Add more projects
  {
    id: 3,
    title: 'Web Development Project 3',
    category: 'Web Development',
    thumbnail: {Image3},
    images: [Image1, Image2, Image3, Image4],
    description: 'A description of the project.',
    technologies: ['React', 'Node.js', 'Express'],
    challenges: 'Challenges faced during development.',
    outcome: 'The positive outcomes and results of the project.',
    website: 'https://www.project-website.com',
  },
  {
    id: 4,
    title: 'Web Development Project 4',
    category: 'Web Development',
    thumbnail: {Image4},
    images: [Image1, Image2, Image3, Image4],
    description: 'A description of the project.',
    technologies: ['React', 'Node.js', 'Express'],
    challenges: 'Challenges faced during development.',
    outcome: 'The positive outcomes and results of the project.',
    website: 'https://www.project-website.com',
  },
];

const Portfolio = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };
  AOS.init();
  return (
    <Container fluid className="portfolio-section mt-5">
      <h2 className="section-title">Portfolio</h2>
      <Row>
        {projects.map((project) => (
          <Col key={project.id} md={4} className="mb-4">
            <Card>
              <div
                className="project-thumbnail"
                style={{ backgroundImage: `url(${project.thumbnail})` }}
                onClick={() => openModal(project)}
              ></div>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Button variant="primary" onClick={() => openModal(project)}>View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        <Col md={6}>
          {selectedProject && (
            <Modal fluid show={showModal} onHide={closeModal}>
              <Modal.Header closeButton>
                <Modal.Title>{selectedProject.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Carousel>
                  {selectedProject.images && selectedProject.images.length > 0 ? (
                    selectedProject.images.map((image, index) => (
                      <Carousel.Item key={index}>
                        <img src={image} alt={`Project Slide ${index}`} className="d-block w-100" />
                      </Carousel.Item>
                    ))
                  ) : (
                    <p>No images available for this project.</p>
                  )}
                </Carousel>
                <p>Category: {selectedProject.category}</p>
                <p>Description: {selectedProject.description}</p>
                <p>Technologies: {selectedProject.technologies.join(', ')}</p>
                <p>Challenges: {selectedProject.challenges}</p>
                <p>Outcome: {selectedProject.outcome}</p>
                {selectedProject.website && (
                  <p>Project Website: <a href={selectedProject.website} target="_blank" rel="noopener noreferrer">{selectedProject.website}</a></p>
                )}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>Close</Button>
              </Modal.Footer>
            </Modal>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;
