import React from 'react';
import { Row, Container } from 'react-bootstrap';

const About = () => {
  return (
    <Container className='p-5'>
      <Row className='text-center'>
        <h2>About us</h2>
        <p className='lead'>
          This an test website for react to handle pizza orders.
        </p>
      </Row>
    </Container>
  );
};

export default About;
