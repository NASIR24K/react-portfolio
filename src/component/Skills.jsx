import React from 'react';
import { Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap'; // Import OverlayTrigger and Tooltip
import '../css/Skills.css'; // Import your custom styling

const skills = [
  { name: 'HTML5', proficiency: 95 },
  { name: 'CSS3', proficiency: 90 },
  { name: 'Bootstrap', proficiency: 90 },
  { name: 'JavaScript', proficiency: 90 },
  { name: 'React', proficiency: 65 },
  { name: 'React-bootstrap', proficiency: 70 },
  { name: 'Node.js', proficiency: 70 },
  { name: 'Jquery', proficiency: 90 },
  { name: 'AJAX/XML', proficiency: 80 },
  { name: 'PHP', proficiency: 90 },
  { name: 'LARAVEL', proficiency: 90 },
  { name: 'MySQL/SQL', proficiency: 90 },
  { name: 'Git', proficiency: 85 },
  { name: 'Communication', proficiency: 95 },
  { name: 'Teamwork', proficiency: 90 },
  // Add more skills
];

const Skills = () => {
  return (
    <Container fluid className="skills-section">
      <h2 className="section-title">Skills</h2>
      <Row>
      {skills.map((skill, index) => (
          <Col key={index} lg={6}className="mb-4">
            <div className="skill">
              <h3>{skill.name}</h3>
              <div className="progress">
                <OverlayTrigger
                  placement='bottom'
                  overlay={<Tooltip>{skill.proficiency}% Proficiency</Tooltip>}
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${skill.proficiency}%` }}
                    aria-valuenow={skill.proficiency}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {skill.proficiency}%
                  </div>
                </OverlayTrigger>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Skills;
