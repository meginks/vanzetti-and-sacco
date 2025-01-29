import React from 'react'; 

// components/Button.jsx
const Button = ({ 
    children, 
    onClick, 
    type = "button", 
    variant = "primary", 
    size = "medium",
    disabled = false,
    className = "" 
  }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`btn btn-${variant} btn-${size} ${className}`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;