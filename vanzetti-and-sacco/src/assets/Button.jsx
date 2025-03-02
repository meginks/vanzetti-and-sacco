import React from 'react'; 
import './Button.css';

const Button = ({ 
  children, 
  onClick, 
  disabled = false,
}) => {
  return (
    <button
      type='button'
      onClick={onClick}
      disabled={disabled}
      className='btn'
    >
      {children}
    </button>
  );
};

export default Button;