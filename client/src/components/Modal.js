import React from 'react';
import ReactDOM from 'react-dom';

const Modal = () => {
  return ReactDOM.createPortal(
    document.getElementById('modal')
  );
};

export default Modal;
