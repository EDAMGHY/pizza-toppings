import React from 'react';
import { useGlobalContext } from '../../context';

const Topping = ({ quantity, id, name, price }) => {
  const { increase, decrease } = useGlobalContext();

  return (
    <li>
      <div className='select'>
        <h6>{name}</h6>
        <span>$ {price}</span>
      </div>
      <div className='plus-minus-btns'>
        <button
          className={quantity < 1 ? 'bg-dark' : 'bg-danger'}
          disabled={quantity < 1 ? true : false}
          onClick={() => decrease(id)}
          style={{ background: 'rgba(255,255,255,0.7)' }}
        >
          <i className='fa fa-minus'></i>
        </button>
        <span>{quantity}</span>
        <button className='bg-success' onClick={() => increase(id)}>
          <i className='fa fa-plus'></i>
        </button>
      </div>
    </li>
  );
};

export default Topping;
