// src/components/common/Button/Button.jsx
import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', onClick, href, className = '' }) => {
  const btnClass = `btn btn-${variant} ${className}`;

  if (href) {
    return <a href={href} className={btnClass}>{children}</a>;
  }

  return (
    <button onClick={onClick} className={btnClass}>
      {children}
    </button>
  );
};

export default Button;