import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';

const AutoCounter = ({ fromValue, toValue, duration, title }) => {
  return (
    <Col md={4}>
      <CountUp start={fromValue} end={toValue} duration={duration} />
      <div className="elementor-counter-title">{title}</div>
    </Col>
  );
};

const CounterUp = () => {
  return (
    <Container>
      <Row>
        <AutoCounter fromValue={0} toValue={350} duration={2} title="Happy Clients" />
        {/* Add more AutoCounter components as needed */}
      </Row>
    </Container>
  );
};

export default CounterUp;
