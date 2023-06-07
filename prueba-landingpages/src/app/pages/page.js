"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import "../../styles/Formulario.css";
import { useRouter } from "next/navigation";

const Form = () => {
  const [valores, setValores] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    usuario: "",
    contrasena: "",
    correo: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValores({
      ...valores,
      [name]: value,
    });
    console.log(valores);
  };

  const router = useRouter();

  const handleForm = (event) => {
    event.preventDefault();
    alert("Se ha registrado con exito");
    router.push("/");

    console.log(values);
  };

  return (
    <>
      <Header />
      <section className="formulario">
        <h1>Formulario de registro</h1>
        <form onSubmit={handleForm}>
          <div className="inputs">
            <label className="label">Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={valores.name}
              onChange={handleInputChange}
              required
            />
            <label>Apellido:</label>
            <input
              type="text"
              name="apellido"
              onChange={handleInputChange}
              required
            />
            <label>Edad:</label>
            <input
              type="text"
              name="edad"
              onChange={handleInputChange}
              required
            />
            <label>Usuraio:</label>
            <input
              type="text"
              name="usuario"
              onChange={handleInputChange}
              required
            />
            <label>Contrasena:</label>
            <input
              type="password"
              name="contrasena"
              onChange={handleInputChange}
              required
            />
            <label>Correo:</label>
            <input
              type="text"
              name="correo"
              placeholder="ejemplo@ejemplo.com"
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" value="Submit">
            Registrase
          </button>
        </form>
      </section>
    </>
  );
};

export default Form;
