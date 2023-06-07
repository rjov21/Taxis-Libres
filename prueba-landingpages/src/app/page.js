"use client";

import '../styles/page.module.css';
import Header from '../components/Header';
import Informacion from '../components/Informacion';
import Premios from '../components/Premios';
import Patrocinadores from '../components/Patrocinadores';

export default function Home() {
  return (
    <>
      <Header/>
      <Informacion />
      <Premios />
      <Patrocinadores />
    </>
  );
};
