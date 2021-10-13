import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const AllNav = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>Pizza Toppings</Navbar.Brand>
        <Nav className='me-auto'>
          <Link className='link' to='/'>
            Home
          </Link>
          <Link className='link' to='/about'>
            About
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AllNav;
