import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './AutoCard.css';

function AutoCard({ nombre, marca, modelo, anio, precio, imagen, addToCart }) {
  const precioCOP = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(precio);

  return (
    <div className="auto-card">
      <img className="auto-image" src={imagen} alt={nombre} />
      <div className="auto-card-info">
        <h3>{nombre}</h3>
        <p className="auto-modelo">
          {marca} - {modelo} <span className="auto-anio">({anio})</span>
        </p>
        <p className="auto-precio">{precioCOP}</p>

        <button className="btn-carrito" onClick={addToCart}>
          <FaShoppingCart className="icono-carrito" /> Comprar
        </button>
      </div>
    </div>
  );
}

export default AutoCard;
