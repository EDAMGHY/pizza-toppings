import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-dark text-center text-lg-start mt-5'>
      <div
        className='text-center p-3 text-light'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        © 2020 Copyright:
        <a className='text-light' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
