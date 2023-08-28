import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/EducationExperience.css';

const EducationExperience = () => {
  return (
    <section className="edu-exp-section">
      <Container fluid>
        <Row>
          <Col md={6} className="education-col">
            <h2 className="section-heading">Education</h2>
            <div className="edu-exp-entry">
              <div className="duration">2017 - 2021</div>
              <div className="info">
                <div className="degree">BSC IN ENGINNERING</div>
                <div className="subject">Computer science & enginnering</div>
                <div className="university">University Of Information Technology & Science</div>
                <div className="location">Dhaka, Bangladesh</div>
                <div className="description">University of Information Technology and Sciences (UITS), the first IT-based private university in Bangladesh was founded on 7 August 2003 as a non-profit organization.</div>
              </div>
            </div>
            <div className="edu-exp-entry">
              <div className="duration">2013 - 2016</div>
              <div className="info">
                <div className="degree">DIPLOMA IN ENGINEERING</div>
                <div className="subject">Computer Technology</div>
                <div className="university">Sherpur Polytechnic Institute</div>
                <div className="location">Sherpur, Bangladesh</div>
                <div className="description">Sherpur Polytechnic Institute. It is a GOVERNMENT Technical and Vocational. This institute's EIIN number is 136071.</div>
              </div>
            </div>
            <div className="edu-exp-entry">
              <div className="duration">2007 - 2012</div>
              <div className="info">
                <div className="degree"></div>
                <div className="subject">Science</div>
                <div className="university">Kulkandi Shamsunnahar High School</div>
                <div className="location">Jamalpur, Bangladesh</div>
                <div className="description">Kulkandi Shamsunnahar High School, located in Kulkandi Islampur Jamalpur, is a co-educational institution recognized by the government.</div>
              </div>
            </div>
          </Col>
          <Col md={6} className="experience-col">
            <h2 className="section-heading">Experience</h2>
            <div className="edu-exp-entry mb-3">
              <div className="duration">Jan/2022 - Aug/2022</div>
              <div className="info">
                <div className="job-title">Project Supervisor</div>
                <div className="company">BACE NGO</div>
                <div className="location">Jamalpur, Bangladesh</div>
                <div className="description">Skills: Communication and Leadership · Microsoft excel, MS Access · CSV files format · Project Management Software</div>
                <Button variant="primary" className="mt-3">View Details</Button>
              </div>
            </div>
            <div className="edu-exp-entry mb-3">
              <div className="duration">Nov/2019 - Feb/2021</div>
              <div className="info">
                <div className="job-title">Software Developer</div>
                <div className="company">SPwave Ltd</div>
                <div className="location">Dhaka, Bangladesh</div>
                <div className="description">Uses Tools such as PHP, Javascript, Bootstrap 3&4, JQuery, AJAX, CSS3, HTML5</div>
                <Button variant="primary" className="mt-3">View Details</Button>
              </div>
            </div>
            <div className="edu-exp-entry mb-3">
              <div className="duration">Oct/2016 - Jan/2019 </div>
              <div className="info">
                <div className="job-title">Executive Officer</div>
                <div className="company">GAMCA-DHAKA</div>
                <div className="location">Dhaka, Bangladesh</div>
                <div className="description">Skills: IP configuration · Printer Support · Computer Hardware Troubleshooting · Project Management Software · Microsoft Office · Computer Networking</div>
                <Button variant="primary" className="mt-3">View Details</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EducationExperience;
