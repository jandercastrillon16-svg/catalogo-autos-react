import React, { useState } from 'react';
import './App.css';
import NavMenu from './components/NavMenu.jsx';
import AutoCard from './components/AutoCard.jsx';
import LoginForm from './components/LoginForm.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]); // 🛒 Estado del carrito

  const autos = [
    { nombre: 'Model S', marca: 'Tesla', modelo: 'Plaid', anio: 2023, precio: 799990000, imagen: '/tesla.jpg' },
    { nombre: 'Mustang', marca: 'Ford', modelo: 'GT500', anio: 2022, precio: 559990000, imagen: '/mustang.jpg' },
    { nombre: 'Civic', marca: 'Honda', modelo: 'Type R', anio: 2021, precio: 250000000, imagen: '/civic.jpg' },
    { nombre: 'M4', marca: 'BMW', modelo: 'Competition', anio: 2023, precio: 680000000, imagen: '/bmwm4.jpg' },
    { nombre: '488 GTB', marca: 'Ferrari', modelo: 'Coupé', anio: 2020, precio: 1200000000, imagen: '/Ferrari488.jpg' },
    { nombre: 'R8', marca: 'Audi', modelo: 'V10 Plus', anio: 2021, precio: 950000000, imagen: '/audir8.jpg' },
    { nombre: 'TT RS', marca: 'Audi', modelo: 'Coupe', anio: 2014, precio: 125000000, imagen: '/auditt.jpg' },
    { nombre: 'GranTurismo', marca: 'Maserati', modelo: 'V8', anio: 2016, precio: 800000000, imagen: '/maserati.jpg' },
    { nombre: 'GT3-RS', marca: 'Porsche', modelo: 'Coupe', anio: 2020, precio: 1600000000, imagen: '/911.jpg' },
    { nombre: 'AMG GT 53', marca: 'Mercedes', modelo: 'Coupe', anio: 2017, precio: 1000000000, imagen: '/amg.jpg' },
    { nombre: 'Aventador', marca: 'Lamborghini', modelo: 'V12', anio: 2011, precio: 1500000000, imagen: '/aventador.jpg' },
    { nombre: 'Chiron Sport', marca: 'Bugatti', modelo: 'V16', anio: 2023, precio: 15000000000, imagen: '/chiron.jpg' },
    { nombre: 'Regera', marca: 'Koenigsegg', modelo: 'V8', anio: 2016, precio: 11000000000, imagen: '/regera.jpg' },
    { nombre: 'Wraith', marca: 'Rolls Royce', modelo: 'Coupe V12', anio: 2015, precio: 900000000, imagen: '/rolls.jpg' },
    { nombre: 'Charger', marca: 'Dodge', modelo: 'STR', anio: 2013, precio: 300000000, imagen: '/str.jpg' },
    { nombre: 'TRX', marca: 'RAM', modelo: '1500', anio: 2023, precio: 600000000, imagen: '/trx.jpg' },
  ];

  const menuItems = [
    { label: 'Inicio', link: '#' },
    { label: 'Catálogo', link: '#' },
    { label: 'Contacto', link: '#' },
  ];

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === '1234') setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCart([]); // limpiar carrito al cerrar sesión
  };

  // 🛒 Función para agregar autos al carrito
  const addToCart = (auto) => {
    setCart((prev) => [...prev, auto]);
  };

  // 🛒 Función para eliminar un auto del carrito
  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  // 🛒 Calcular total
  const total = cart.reduce((acc, item) => acc + item.precio, 0);

  const totalCOP = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(total);

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
          <div className="auto-grid">
            {autos.map((auto, index) => (
              <AutoCard
                key={index}
                nombre={auto.nombre}
                marca={auto.marca}
                modelo={auto.modelo}
                anio={auto.anio}
                precio={auto.precio}
                imagen={auto.imagen}
                addToCart={() => addToCart(auto)} // 🔥 Pasamos la función
              />
            ))}
          </div>

          {/* 🛒 Carrito */}
          {cart.length > 0 && (
            <div className="cart-container">
              <h2>Carrito de compras ({cart.length})</h2>
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>
                    {item.nombre} - {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(item.precio)}
                    <button className="remove-btn" onClick={() => removeFromCart(index)}>Eliminar</button>
                  </li>
                ))}
              </ul>
              <p><strong>Total:</strong> {totalCOP}</p>
            </div>
          )}
        </div>
      )}

      <footer className="footer">
        <p>© 2025 Catálogo de Autos | Todos los derechos reservados a JANDER</p>
      </footer>
    </div>
  );
}

export default App;

