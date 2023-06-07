"use client";

import { useRouter } from "next/navigation";
import React, {useState} from "react";
import '../styles/Informacion.css';
import HackatonFoto from '../assets/hackaton.jpg';
import FechaHackaton from '../assets/fecha.jpg';
import Formulario from '../assets/formulario.png';
import ArrowLeft from '../icons/ArrowLeft.svg';
import ArrowRight from '../icons/ArrowRight.svg';
import Image from "next/image";


import 'bootstrap/dist/css/bootstrap.min.css';


const Informacion = () => {
  const [slideactual, setSlideactual] = useState(1);

  const router = useRouter()

  const info = [
  {id: 1, image: HackatonFoto, title: "Hackaton virtual de Taxis libres", text: "Si eres programador, diseñador, data scientist, mercadólogo, economista, financiero o un apasionado por la innovación y la creatividad participa gratis en nuestra maratón de creación donde tenemos retos reales sobre movilidad.Podrás participar en modalidad individual, grupal o startup (Taxis Libres te asignará un equipo según tu perfil).Los equipos ganadores obtendrán $25.000 USD beneficios"},
  {id: 2, image: Formulario, title: "Como inscribirse?", text: "Da clic en el boton de abajo y completa el formulario de inscripcion"},
  {id: 3, image: FechaHackaton, title: "Progrmate para este evento", text: "Inscripciones abiertas hasta el 10 de junio del 2023. Este evento se realizara del 15 al 31 de junio del 2023"}
  ]
  console.log(info);

  const nextSlide = () => {
    setSlideactual(slideactual == 3 ? 1 : slideactual + 1);
  }

  const prevSlide = () => {
    setSlideactual(slideactual == 1 ? 3 : slideactual - 1);
  }



  return (
    <section className="slider">
      <div className="slider-container ">
        <Image src={ArrowLeft} className="slider-arrow" id="before" onClick={prevSlide}/>

        <section className="slider-body" >
          {info.map(slide => (
            <div className= {slide.id == slideactual ? "slide active" : "slide"} key={slide.id} id="slide-activo">
              {slide.id == slideactual && (
                <section key={slide.key} id="slide-container">
                <div className="slider-text">
                <h2>{slide.title}</h2>
                <p>
                  {slide.text}
                </p>
                <button className= {slide.id == 2 ? "button-activo" : "button-inactivo"} onClick={() => router.push("/pages")}>Inscribirse</button>
                </div>
                <figure>
                  <Image src={slide.image} className="slider-img"/>
                </figure>
                </section>
              )}
            </div>
          ))}
        </section>
        <Image src={ArrowRight} onClick={nextSlide} className="slider-arrow" id="after"/>
        </div>
        </section>
        

        
  );
};

export default Informacion;