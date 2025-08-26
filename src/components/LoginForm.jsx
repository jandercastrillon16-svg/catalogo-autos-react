import React, { useState } from 'react';
import './LoginForm.css';
import Button from './Button.jsx';
import TextInput from './TextInput.jsx';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '1234') {
      onLogin(username, password);
      setError('');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar sesión</h2>
        {error && <p className="error">{error}</p>}
        <TextInput value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Usuario" />
        <TextInput value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" type="password" />
        <Button text="Ingresar" onClick={handleSubmit} color="#0d47a1" />
      </form>
    </div>
  );
}

export default LoginForm;
