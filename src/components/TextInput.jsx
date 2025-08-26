import React from 'react';
import './TextInput.css';

function TextInput({ value, onChange, placeholder, type = 'text' }) {
  return (
    <input
      className="text-input"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default TextInput;
