import React from 'react';
import { Container } from 'react-bootstrap';
import '../css/Footer.css'; // Import your custom styling

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
          <a href="https://www.twitter.com/your-profile" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
        </p>
        <p className="disclaimer">
          Disclaimer: The information and services provided on this website are for general informational purposes only and do not constitute professional advice.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
