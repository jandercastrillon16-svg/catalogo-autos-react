import React from 'react';
import './NavMenu.css';
import Button from './Button';

function NavMenu({ items, onLogout, isLoggedIn }) {
  return (
    <nav className="nav-menu">
      {/* Menú de texto (Inicio, Catálogo, Contacto) */}
      <ul className="menu-items">
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>

      {/* Logos de marcas */}
      <ul className="brand-logos">
        <li><img src="/logobmw.png" alt="BMW" className="logo-marca" /></li>
        <li><img src="/logoferrari.png" alt="Ferrari" className="logo-marca" /></li>
        <li><img src="/logolambo.png" alt="Lamborghini" className="logo-marca" /></li>
        <li><img src="/logoaudi.png" alt="Audi" className="logo-marca" /></li>
        <li><img src="/logoford.png" alt="Ford" className="logo-marca" /></li>
        <li><img src="/logochevrolet.png" alt="Chevrolet" className="logo-marca" /></li>
        <li><img src="/logomercedes.png" alt="Mercedes" className="logo-marca" /></li>
        <li><img src="/logoporsche.png" alt="Porsche" className="logo-marca" /></li>
      </ul>

      {/* Botón de cerrar sesión */}
      {isLoggedIn && (
        <div className="logout-nav">
          <Button text="Cerrar sesión" onClick={onLogout} color="#d32f2f" />
        </div>
      )}
    </nav>
  );
}

export default NavMenu;
