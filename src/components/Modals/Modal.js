import React from 'react';
import { Modal as MODAL, Button, Alert } from 'react-bootstrap';
import { useGlobalContext } from '../../context';

const Modal = () => {
  const { alert, cart, show, handleClose } = useGlobalContext();
  return (
    <>
      <MODAL show={show} onHide={handleClose}>
        <MODAL.Header closeButton>
          <MODAL.Title>Your Order :</MODAL.Title>
        </MODAL.Header>
        <MODAL.Body>
          <h6>Your pizza includes following toppings</h6>
          {alert ? (
            <Alert variant='primary'> No toppings chosen. </Alert>
          ) : (
            cart.map((item) => {
              if (item.quantity > 0) {
                return (
                  <p className='load' key={item.id}>
                    {item.name} x {item.quantity}
                  </p>
                );
              }
              return null;
            })
          )}
        </MODAL.Body>
        <MODAL.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='success' onClick={handleClose}>
            Save Changes
          </Button>
        </MODAL.Footer>
      </MODAL>
    </>
  );
};

export default Modal;
