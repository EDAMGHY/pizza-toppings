import React from 'react';
import { Row, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Container className='p-3'>
      <Row className='text-center'>
        <h2>Pizza Builder</h2>
        <p className='lead'>
          Here you can build your pizza using the builder with the ingredients
          provided.
        </p>
      </Row>
    </Container>
  );
};

export default Header;
