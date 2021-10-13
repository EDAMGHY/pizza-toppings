import React from 'react';
import { Container } from 'react-bootstrap';
import Item from './Item';
import { useGlobalContext } from '../../context';
const ItemsList = () => {
  const { cart } = useGlobalContext();
  return (
    <Container>
      <h5 className='items-heading'>Your Items</h5>
      <hr />
      <div className='items'>
        <div className='item'>
          <img
            src='https://image.freepik.com/free-photo/crispy-mixed-pizza-with-olives-sausage_140725-3095.jpg'
            alt='random'
          />
        </div>
        {cart.map(
          (item) => item.quantity > 0 && <Item key={item.id} {...item} />
        )}
      </div>
    </Container>
  );
};

export default ItemsList;
