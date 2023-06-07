import React from 'react';
import '../styles/Patrocinadores.css';
import Image from 'next/image';
import aguila from '../assets/aguila.jpg'
import Envia from '../assets/envia.png'
import Olimpica from '../assets/olimpica.png'
import tecnoglass from '../assets/tecnoglass.png'
import Aguilacerveza from '../assets/aguilacerveza.jpg'


const Patrocinadores = () => {
    return(
        <>
        <div className='slider-patrocinadores'>
            <h1>Patrocinadores</h1>
            <div className='slider-track'>
            <div className='slide-patrocinador'>
                <Image src={aguila}/>
            </div>
            <div className='slide-patrocinador'>
                <Image src={tecnoglass}/>
            </div>
            <div className='slide-patrocinador'>
                <Image src={Aguilacerveza}/>
            </div>
            <div className='slide-patrocinador'>
                <Image src={Envia}/>
            </div><div className='slide-patrocinador'>
                <Image src={Olimpica}/>
            </div>
            </div>
        </div>
        </>
    );
};

export default Patrocinadores;