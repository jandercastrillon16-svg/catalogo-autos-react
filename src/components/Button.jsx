import React from 'react';
import './Button.css';

function Button({ text, onClick, color = '#0d47a1' }) {
  return (
    <button className="btn" style={{ backgroundColor: color }} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
