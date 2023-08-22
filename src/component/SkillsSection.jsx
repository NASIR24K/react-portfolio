import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Tooltip from 'react-bootstrap/Tooltip'; // Import the Tooltip component
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'; // Import the OverlayTrigger component
import '../css/SkillsSection.css'; // You'll create this CSS file for styling

const SkillsSection = () => {
  // Create a function to render the tooltip
  const renderTooltip = (text) => (
    <Tooltip id="tooltip">{text}</Tooltip>
  );

  return (
    <div className="skills-section">
      <div className="elementor-widget-container">
        <div className="elementor-progress-wrapper progress">
          <OverlayTrigger
            placement="left"
            overlay={renderTooltip('(PHP)')}
          >
            <ProgressBar
              now={85}
              label="85%"
              className="elementor-progress-bar"
            />
          </OverlayTrigger>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
