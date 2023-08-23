import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import VideoItem from './Video'; // Import VideoItem from the appropriate location
import Auto from './HomeAbout'; // Import AutoCounter from the appropriate location
const videos = [
    {
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_1',
      title: 'Video 1',
    }    // Add more video objects as needed
  ];
const HomeAbout = ({ videoUrl, title }) => {
  return (
    <Container className="py-5">
      <Row>
        {/* First Column */}
        {videos.map((video, index) => (
          <Col key={index} md={6}>
            <VideoItem videoUrl={video.videoUrl} title={video.title} />
          </Col>
        ))}
        
        {/* Second Column */}
        <Col md={6} className="mb-4">
          <div className="about-content">
            <h2>Why Hire Me</h2>
            <p>
              Here is a compelling reason why you should consider hiring me.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <Row>
        {/* First Column */}
        <Col md={4} className="mb-4">
          <Auto fromValue={0} toValue={350} duration={2000} title="Happy Clients" />
        </Col>
        
        {/* Second Column */}
        <Col md={4} className="mb-4">
          <Auto fromValue={0} toValue={100} duration={1500} title="Projects Completed" />
        </Col>
        
        {/* Third Column */}
        <Col md={4} className="mb-4">
          <Auto fromValue={0} toValue={25} duration={1000} title="Years of Experience" />
        </Col>
      </Row>

        </Col>
      </Row>
    </Container>
  );
};

export default HomeAbout;
