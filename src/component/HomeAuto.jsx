import React from 'react';
import {Col } from 'react-bootstrap';

const Auto = ({ fromValue, toValue, duration, title }) => {
  const counterStyles = {
    counter: {
      textAlign: 'center',
      margin: '20px 0',
    },
    counterNumberWrapper: {
      display: 'inline-block',
    },
    counterNumber: {
      fontSize: '36px',
      fontWeight: 'bold',
    },
    counterTitle: {
      marginTop: '10px',
    },
  };

  return (
    <Col md={4}>
      <div style={counterStyles.counter}>
        <div style={counterStyles.counterNumberWrapper}>
          <span className="elementor-counter-number-prefix"></span>
          <span
            style={counterStyles.counterNumber}
            data-duration={duration}
            data-to-value={toValue}
            data-from-value={fromValue}
            data-delimiter=","
          >
            {toValue}
          </span>
          <span className="elementor-counter-number-suffix">+</span>
        </div>
        <div style={counterStyles.counterTitle}>{title}</div>
      </div>
    </Col>
  );
};

export default Auto;
