import React from 'react';
import Header from '../components/Home/Header';
import Items from '../components/Items/ItemsList';
import Toppings from '../components/Toppings/Toppings';
import { Container } from 'react-bootstrap';
const Home = () => {
  return (
    <Container className='text-center'>
      <Header />
      <div className='row'>
        <div className='col-8'>
          <Items />
        </div>
        <div className='col'>
          <Toppings />
        </div>
      </div>
    </Container>
  );
};

export default Home;
