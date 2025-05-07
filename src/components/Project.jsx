import React, { useEffect, useState } from 'react';
import Gradient from '../assets/gradient.png';
import '../styles/Project.css';

export default function Project(){

    return(
        <section id='projects' className='flex-1 h-full p-6 overflow-auto relative'>
            <img src={Gradient} alt="" className='gradient-4' />
            
            <p>this</p>
            <p>this</p>
            <p>this</p>
            <p>this</p>
            <p>this</p>
        </section>
    );
}