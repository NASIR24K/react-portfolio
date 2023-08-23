import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

const AutoCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container style={{ marginTop: '20px', textAlign: 'center' }}>
      <h2>Auto Counter</h2>
      <p>Count: {count}</p>
    </Container>
  );
};

export default AutoCounter;
