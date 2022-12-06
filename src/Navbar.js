import React from 'react';
import {Link, } from 'react-router-dom';
import './Estilos.css';

export const Navbar = () => {
  return (
    <nav>
    <div className="nav-main">
      
      <div id="nav-header">
      <img src="logoprincipalrestaurante.jpg" height="100" alt="restaurantes" id="logo"/>

      </div>
      
      <ul className="menu">
        <li ><Link to="/inicio">inicio</Link></li>
        <li ><Link to="/Buscar">buscar</Link></li>
        <li ><Link to="/nuevo">Nuevo Restaurante</Link></li>
      </ul>

    </div>
  </nav>
  )
}
