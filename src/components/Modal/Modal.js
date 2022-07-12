import React from 'react';
import css from './Modal.module.css';

const Modal = () => {
  return (
    <div className={css.Overlay}>
      <div className={css.Modal}>
        <img src={this.props.images} alt={this.props.tags} />
      </div>
    </div>
  );
};

export default Modal;
