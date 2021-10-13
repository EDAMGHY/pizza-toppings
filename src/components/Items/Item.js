import React from 'react';
const Item = ({ quantity, image }) => {
  return (
    <div className='item'>
      <img src={image} alt='random' />
      <span className='count'>{quantity}</span>
    </div>
  );
};

export default Item;
