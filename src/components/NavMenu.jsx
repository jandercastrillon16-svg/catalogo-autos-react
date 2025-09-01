import React, { useState, useEffect } from 'react';
import './NavMenu.css';
import Button from './Button';

function NavMenu({ items, onLogout, isLoggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Oculta/mostrar navbar al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowNav(false); // bajando → ocultar
      } else {
        setShowNav(true);  // subiendo → mostrar
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`nav-menu ${menuOpen ? 'active' : ''} ${showNav ? 'show' : 'hide'}`}>
      {/* Botón Hamburger */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menú de links */}
      <ul className="menu-items">
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>

      {/* Carrusel de logos */}
      <div className="brand-logos">
        <div className="brand-logos-track">
          <img src="/logobmw.png" alt="BMW" className="logo-marca" />
          <img src="/logoferrari.png" alt="Ferrari" className="logo-marca" />
          <img src="/logolambo.png" alt="Lamborghini" className="logo-marca" />
          <img src="/logoaudi.png" alt="Audi" className="logo-marca" />
          <img src="/logoford.png" alt="Ford" className="logo-marca" />
          <img src="/logochevrolet.png" alt="Chevrolet" className="logo-marca" />
          <img src="/logomercedes.png" alt="Mercedes" className="logo-marca" />
          <img src="/logoporsche.png" alt="Porsche" className="logo-marca" />
          <img src="/logomaserati.png" alt="Maserati" className="logo-marca" />
          <img src="/logokoe.png" alt="Koenigsegg" className="logo-marca" />
          <img src="/logotesla.png" alt="Tesla" className="logo-marca" />
          <img src="/logododge.png" alt="Dodge" className="logo-marca" />
          {/* Duplicar logos para animación infinita */}
          <img src="/logobmw.png" alt="BMW" className="logo-marca" />
          <img src="/logoferrari.png" alt="Ferrari" className="logo-marca" />
          <img src="/logolambo.png" alt="Lamborghini" className="logo-marca" />
          <img src="/logoaudi.png" alt="Audi" className="logo-marca" />
          <img src="/logoford.png" alt="Ford" className="logo-marca" />
          <img src="/logochevrolet.png" alt="Chevrolet" className="logo-marca" />
          <img src="/logomercedes.png" alt="Mercedes" className="logo-marca" />
          <img src="/logoporsche.png" alt="Porsche" className="logo-marca" />
          <img src="/logomaserati.png" alt="Maserati" className="logo-marca" />
          <img src="/logokoe.png" alt="Koenigsegg" className="logo-marca" />
          <img src="/logotesla.png" alt="Tesla" className="logo-marca" />
          <img src="/logododge.png" alt="Dodge" className="logo-marca" />
        </div>
      </div>

      {/* Botón cerrar sesión */}
      {isLoggedIn && (
        <div className="logout-nav">
          <Button text="Cerrar sesión" onClick={onLogout} color="#d32f2f" />
        </div>
      )}
    </nav>
  );
}

export default NavMenu;
