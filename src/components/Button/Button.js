import React from 'react';
import css from './Button.module.css';

const Button = () => {
  return (
    <div>
      <a href="http://google.com" className={css.Button}>
        Load more
      </a>
    </div>
  );
};

export default Button;
