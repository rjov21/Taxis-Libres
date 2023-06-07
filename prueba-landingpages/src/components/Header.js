"use client";

import React, {useState} from "react";
import '../styles/Header.css';
import menuburguer from '../icons/MenuBurguer.svg';
import Image from "next/image";
import MenuBurguer from "../containers/MenuBurguer";


const Header = () => {
  const [toggle, setToggle] = useState(false);
  
  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <nav>
        
        <Image src={menuburguer} className="Menu" onClick={handleToggle}/>

      <div className="navbar-left">
        <img src="https://www.taxislibres.com.co/public/imagesNew/logo-escritorio.webp" alt="logo" className="nav-logo" />

        <ul>
          <li>
            <a href="/">Nosotros
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 
                        7.75735L12 13.4142L6.34317 7.75732Z"
                        fill="currentColor"
                    />
                </svg>
            </a>
          </li>
          <li>
            <a href="/">Viajeros
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 
                        7.75735L12 13.4142L6.34317 7.75732Z"
                        fill="currentColor"
                    />
                </svg>
            </a>
          </li>
          <li>
            <a href="/">Empresas
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 
                        7.75735L12 13.4142L6.34317 7.75732Z"
                        fill="currentColor"
                    />
                </svg>
            </a>
          </li>
          <li>
            <a href="/">Vinculados
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 
                        7.75735L12 13.4142L6.34317 7.75732Z"
                        fill="currentColor"
                    />
                </svg>
            </a>
          </li>
          <li>
            <a href="/">Ciudades
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 
                        7.75735L12 13.4142L6.34317 7.75732Z"
                        fill="currentColor"
                    />
                </svg>
            </a>
          </li>
          <li>
            <a href="/">Mas
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 
                        7.75735L12 13.4142L6.34317 7.75732Z"
                        fill="currentColor"
                    />
                </svg>
            </a>
          </li>
          <li>
            <a href="/">Ayuda
            </a>
          </li>
        </ul>
      </div>
       {toggle && <MenuBurguer />}
      
    </nav>
  );
};

export default Header;