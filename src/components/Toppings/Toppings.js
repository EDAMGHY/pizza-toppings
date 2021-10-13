import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Topping from './Topping';
import { useGlobalContext } from '../../context';

const Toppings = () => {
  const { total, cart, handleShow, reset } = useGlobalContext();
  return (
    <Container>
      <h5 className='toppings-heading'>Select Toppings</h5>
      <hr />
      <div className='toppings-header'>
        <span className='total'>$ 3</span>
        <Button className='btn btn-success' onClick={reset}>
          Reset
        </Button>
      </div>
      <ul className='toppings'>
        <li>
          <div className='select'>
            <h6>Base Pizza</h6>
            <span>$ 3.5</span>
          </div>
        </li>
        {cart.map((item) => (
          <Topping key={item.id} {...item} />
        ))}
        <li>
          <h6>Total</h6>
          <span className='total'>$ {total}</span>
        </li>
        <li>
          <Button variant='primary' onClick={handleShow}>
            Checkout
          </Button>
        </li>
      </ul>
    </Container>
  );
};

export default Toppings;
