import React from "react";
import Image from "next/image";
import "../styles/Premios.css";
import FotoComputador from "../assets/computador.jpg";

const Premios = () => {
  return (
    <div className="container">
        <h1>Premios</h1>
      <div className="wrapper">
        <div className="one">
          <Image src={FotoComputador} alt="Avatar" />
          <div className="container">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div className="two">
          <Image src={FotoComputador} alt="Avatar" />
          <div className="container">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div className="three">
          <Image src={FotoComputador} alt="Avatar" />
          <div className="container">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div className="four">
          <Image src={FotoComputador} alt="Avatar" />
          <div className="container">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div className="five">
          <Image src={FotoComputador} alt="Avatar" />
          <div className="container">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div className="six">
          <Image src={FotoComputador} alt="Avatar" />
          <div className="container">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premios;
