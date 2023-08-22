import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import '../css/Animate.css';

const TextAnimation = () => {
  const [displayText, setDisplayText] = useState('Full-Stack Web Developer');

  const textLoader = () => {
    setTimeout(() => {
      setDisplayText('Full-Stack Web Developer');
    }, 0);
    setTimeout(() => {
      setDisplayText('Front-end Developer');
    }, 4000);
    setTimeout(() => {
      setDisplayText('Programmer');
    }, 8000);
    setTimeout(() => {
      setDisplayText('Back-end Developer');
    }, 12000);
    setTimeout(() => {
      setDisplayText('Freelancer');
    }, 16000);
  };

  useEffect(() => {
    textLoader();
    const interval = setInterval(textLoader, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      <Container fluid>
        <span className="text first-text">Welcome, <br /> MD NASIR UDDIN <br /> I'm a</span>
        <span className="text sec-text">{displayText}</span>
        <p className="hero-tagline">Greetings! I'm excited to present my software engineering
              journey. Explore projects showcasing my skills in web development and algorithm
              optimization. Whether you're a developer, collaborator, or simply curious, delve into
              my passion for impactful software. Thank you for visiting, and let's connect over our
              shared tech interests. Browse my portfolio and explore the world of software engineering.</p>
      </Container>
    </div>
  );
};

export default TextAnimation;
