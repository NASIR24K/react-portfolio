import React from 'react';
import { Container, Button } from 'react-bootstrap';
import '../css/Resume.css'; // Import your custom styling

const Resume = () => {
  const downloadResume = () => {
    // Replace 'path-to-resume.pdf' with the actual path to your PDF file
    const pdfPath = 'path-to-resume.pdf';
    window.open(pdfPath);
  };

  return (
    <Container fluid className="resume-section">
      <Button variant="primary" onClick={downloadResume}>Download Resume</Button>
    </Container>
  );
}

export default Resume;
