import React, {useEffect, useState} from 'react';
import '../styles/Contact.css';
import Gradient from '../assets/gradient.png';
import Connect from '../assets/connect.svg';
import Terminal from '../assets/terminal.svg';

export default function Contact(){
    return(
        <section id='contact' className='flex-1 h-full overflow-auto relative'>
            <img src={Gradient} alt="" className='gradient-6' />
            <img src={Gradient} alt="" className='gradient-7' />
            
            <div className='contact-header p-2 text-center bg-[#c6ff00]'>
                <h1>"CODE HARD. SLEEP LESS. DREAM OF CLEAN COMMITS."</h1>
            </div>
            <div className="w-full grid grid-cols-1 p-5 sm:grid-cols-2 gap-15">
                <div className='w-full h-auto object-contain' style={{zIndex:'1'}}>
                    <img src={Terminal} alt="Terminal" className="terminal-img p-10" />
                    <div className='text-left text-white terminal-text'>
                        <h1><span className='text-[#AD48C6]'>console</span>.<span className='text-[#4DD862]'>log</span>(<a href=''><span className='text-[#3888F8] underline'>LinkedIn</span></a>);</h1>
                        <h1><span className='text-[#AD48C6]'>console</span>.<span className='text-[#4DD862]'>log</span>(<a href=''><span className='text-[#3888F8] underline'>Github</span></a>);</h1>
                        <h1><span className='text-[#AD48C6]'>console</span>.<span className='text-[#4DD862]'>log</span>(<a href=''><span className='text-[#3888F8] underline'>Gmail</span></a>);</h1>
                    </div>
                </div>
                <div className='w-full h-auto object-contain'>
                    <img src={Connect} alt="Connect" className="connect-img p-20" />
                </div>
            </div>


        </section>
    );
}