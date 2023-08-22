import React from 'react';
import { Container, Row, Col, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/PricingTabl.css'; // Import your custom CSS file for styling
import AOS from 'aos';

const PricingTable = () => {
  AOS.init();
  return (
    <Container className="pricing-table">
           <h3>Pricing</h3>
      <Row>
      <p>Contact us for custom quotes tailored to your specific needs.</p>
        <Col className="recommended" data-aos="fade-right" data-aos-duration="1000">
          <div className="plan-header">
            <div className="warp-header">
              <div className="warp-title" style={{ '--accent-color': '#ffc0cb' }}>
                <div className="icon"><i className="fa-brands fa-codepen"></i></div>
                <OverlayTrigger overlay={<Tooltip>This is a tooltip</Tooltip>}>
                  <Button className="tooltip-btn">
                    BASIC
                    <span className="tooltip-text">$5/hours</span>
                  </Button>
                </OverlayTrigger>
              </div>
            </div>
          </div>
          <ul className="plan-features">
            <li className="check-icon">&#10004; <span className="check-text">Plan Feature 1</span></li>
            <li className="check-icon">&#10004; <span className="check-text">Plan Feature 2</span></li>
            <li className="check-icon">&#10004; <span className="check-text">Plan Feature 3</span></li>
            {/* ... */}
          </ul>
          <a href="0#" className="signup">Sign up</a>
        </Col>

        <Col className="recommended" data-aos="fade-up" data-aos-duration="1000">
          <div className="plan-header">
            <div className="warp-header">
              <div className="warp-title" style={{ '--accent-color': '#ffc0cb' }}>
                <div className="icon"><i className="fa-brands fa-codepen"></i></div>
                <OverlayTrigger overlay={<Tooltip>This is a tooltip</Tooltip>}>
                  <Button className="tooltip-btn">
                    BASIC
                    <span className="tooltip-text">$5/hours</span>
                  </Button>
                </OverlayTrigger>
              </div>
            </div>
          </div>
          <ul className="plan-features">
            <li className="check-icon">&#10004; <span className="check-text">Plan Feature 1</span></li>
            <li className="check-icon">&#10004; <span className="check-text">Plan Feature 2</span></li>
            <li className="check-icon">&#10004; <span className="check-text">Plan Feature 3</span></li>
            {/* ... */}
          </ul>
          <a href="0#" className="signup">Sign up</a>
        </Col>
        <Col className="recommended" data-aos="fade-left" data-aos-duration="1000">
          <div className="plan-header">
            <div className="warp-header">
              <div className="warp-title" style={{ '--accent-color': '#ffc0cb' }}>
                <div className="icon"><i className="fa-brands fa-codepen"></i></div>
                <OverlayTrigger overlay={<Tooltip>This is a tooltip</Tooltip>}>
                  <Button className="tooltip-btn">
                    BASIC
                    <span className="tooltip-text">$5/hours</span>
                  </Button>
                </OverlayTrigger>
              </div>
            </div>
          </div>
          <ul className="plan-features">
            <li className="check-icon">&#10004; <span className="check-text">Plan Feature 1</span></li>
            <li className="check-icon">&#10004; <span className="check-text">Plan Feature 2</span></li>
            <li className="check-icon">&#10004; <span className="check-text">Plan Feature 3</span></li>
            {/* ... */}
          </ul>
          <a href="0#" className="signup">Sign up</a>
        </Col>
      </Row>
    </Container>
  );
};

export default PricingTable;
