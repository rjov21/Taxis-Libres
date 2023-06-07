import React from "react";
import '../styles/MenuBurguer.css';

const MenuBurguer = () => {
  return (
    <div className="mobile-menu">
      <ul>
        <li>
          <a href="/">Nosotros</a>
        </li>
        <li>
          <a href="/">Viajeros</a>
        </li>
        <li>
          <a href="/">Empresas</a>
        </li>
        <li>
          <a href="/">Vinculados</a>
        </li>
        <li>
          <a href="/">Ciudades</a>
        </li>
        <li>
          <a href="/">Mas</a>
        </li>
        <li>
          <a href="/">Ayuda</a>
        </li>
      </ul>
    </div>
  );
};

export default MenuBurguer;
