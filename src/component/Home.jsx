import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/Home.css';
import Image from '../assets/Images/01725874024.JPG';
import Contact from './Contact';
import Testimonial from './Testimonial';
import Portfolio from './Portfolio';
import TextAnimation from './Animate'; 
import VideoItem from './Video'; // Adjust the path based on your project structure
import AutoCounter from './AutoCounter';
import Auto from './HomeAuto';
import HomeAbout from './Home';
const videos = [
  {
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_1',
    title: 'Video 1',
  },
  {
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_2',
    title: 'Video 2',
  },
  // Add more video objects as needed
];

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
      <Container style={{ marginTop: '20px' }}>
      <Row>
        {videos.map((video, index) => (
          <Col key={index} md={6}>
            <VideoItem videoUrl={video.videoUrl} title={video.title} />
          </Col>
        ))}
      </Row>
    </Container>

    <Container>
      <Row>
        <Auto fromValue={0} toValue={350} duration={2000} title="Happy Clients" />
        <Auto fromValue={0} toValue={100} duration={1500} title="Projects Completed" />
        <Auto fromValue={0} toValue={25} duration={1000} title="Years of Experience" />
      </Row>
    </Container>
  
      <Portfolio />
      <Testimonial />
      <Contact />
    </section>
  );
};

export default Home;
