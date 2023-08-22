import React from 'react';
import { Container } from 'react-bootstrap';
import '../css/Footer.css'; // Import your custom styling
import * as Icon from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <Icon.Facebook />
            </a>
          <a href="https://www.twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
            <Icon.Envelope  />
            </a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <Icon.Whatsapp />
            </a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <Icon.Skype />
            </a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <Icon.Twitter />
            </a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <Icon.Instagram  />
            </a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <Icon.Behance   />
            </a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} NFSoft. All Rights Reserved.
        </p>
        <p className="disclaimer">
          Disclaimer: The information and services provided on this website are for general informational purposes only and do not constitute professional advice.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
