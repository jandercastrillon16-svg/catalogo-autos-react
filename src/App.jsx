import React, { useState } from 'react';
import './App.css';
import NavMenu from './components/NavMenu.jsx';
import AutoCard from './components/AutoCard.jsx';
import LoginForm from './components/LoginForm.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const autos = [
    {
      nombre: 'Model S',
      marca: 'Tesla',
      modelo: 'Plaid',
      anio: 2023,
      precio: 799990000,
      imagen: '/tesla.jpg',
    },
    {
      nombre: 'Mustang',
      marca: 'Ford',
      modelo: 'GT500',
      anio: 2022,
      precio: 559990000,
      imagen: '/mustang.jpg',
    },
    {
      nombre: 'Civic',
      marca: 'Honda',
      modelo: 'Type R',
      anio: 2021,
      precio: 250000000,
      imagen: '/civic.jpg',
    },
      {
    nombre: 'M4',
    marca: 'BMW',
    modelo: 'Competition',
    anio: 2023,
    precio: 680000000,
    imagen: '/bmwm4.jpg',
  },
  {
    nombre: '488 GTB',
    marca: 'Ferrari',
    modelo: 'Coupé',
    anio: 2020,
    precio: 1200000000,
    imagen: '/Ferrari488.jpg',
  },
  {
    nombre: 'R8',
    marca: 'Audi',
    modelo: 'V10 Plus',
    anio: 2021,
    precio: 950000000,
    imagen: '/audir8.jpg',
  },
    {
    nombre: 'TT RS',
    marca: 'Audi',
    modelo: 'Coupe',
    anio: 2014,
    precio: 125000000,
    imagen: '/auditt.jpg',
  },
];
  

  const menuItems = [
    { label: 'Inicio', link: '#' },
    { label: 'Catálogo', link: '#' },
    { label: 'Contacto', link: '#' },

  ];

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === '1234') {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <NavMenu items={menuItems} onLogout={handleLogout} isLoggedIn={isLoggedIn} />

      <header className="hero">
        <h1>Catálogo de Autos Exclusivos</h1>
        <p>Encuentra tu próximo vehículo de lujo</p>
      </header>

      {!isLoggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <div className="catalog-container">
          <div className="autos-grid">
            {autos.map((auto, index) => (
              <AutoCard
                key={index}
                nombre={auto.nombre}
                marca={auto.marca}
                modelo={auto.modelo}
                anio={auto.anio}
                precio={auto.precio}
                imagen={auto.imagen}
              />
            ))}
          </div>
        </div>
      )}

      <footer className="footer">
        <p>© 2025 Catálogo de Autos | Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;
