import React, { useEffect, useState } from 'react';
import Gradient from '../assets/gradient.png';
import EMS from '../assets/projects/ems.svg';
import Inventory from '../assets/projects/inventory.svg';
import Vehicle from '../assets/projects/vehicle.svg';
import ImageRec from '../assets/projects/image-recoginition.svg';
import Movie from '../assets/projects/movie.svg';
import '../styles/Project.css';

export default function Project(){

    return(
        <section id='projects' className='flex-1 h-full p-6 overflow-auto relative'>
            <img src={Gradient} alt="" className='gradient-4' />
            <div class="container mx-auto px-4 py-8">
                <div class="flex flex-col items-center">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 max-w-6xl mb-4">
                        <div class="slanted-box rounded-lg shadow-md py-6 h-100">
                            <img src={EMS} alt="" className='' />
                            
                            <div className='card-footer'>
                                <h3 class="text-lg">Employee Management System</h3>
                                <span class="font-normal ">Card 1 oasjd kasj akjnd kjs kjnd kqjw asckjd ksd ckjs dks dkcj sdkjc skdj cksdj </span>
                            </div>
                        </div>
                        <div class="slanted-box rounded-lg shadow-md py-6 h-100">
                            <img src={Inventory} alt="" className='' />
                            
                            <div className='card-footer'>
                                <h3 class="text-lg">Employee Management System</h3>
                                <span class="font-normal ">Card 1 oasjd kasj akjnd kjs kjnd kqjw asckjd ksd ckjs dks dkcj sdkjc skdj cksdj </span>
                            </div>
                        </div>
                        <div class="slanted-box rounded-lg shadow-md py-6 h-100 col-span-1 sm:col-span-2 lg:col-span-1">
                            <img src={Vehicle} alt="" className='' />
                            
                            <div className='card-footer'>
                                <h3 class="text-lg">Employee Management System</h3>
                                <span class="font-normal ">Card 1 oasjd kasj akjnd kjs kjnd kqjw asckjd ksd ckjs dks dkcj sdkjc skdj cksdj </span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-1 sm:grid-cols-2 mt-20 gap-20 max-w-6xl">
                    <div class="slanted-box rounded-lg shadow-md py-6 h-100">
                        <img src={ImageRec} alt="" className='' />
                        
                        <div className='card-footer w-60 mx-7'>
                            <h3 class="text-lg">Employee Management System</h3>
                            <span class="font-normal ">Card 1 oasjd kasj akjnd kjs kjnd kqjw asckjd ksd ckjs dks dkcj sdkjc skdj cksdj </span>
                        </div>
                    </div>
                    <div class="slanted-box rounded-lg shadow-md py-6 h-100">
                        <img src={Movie} alt="" className='' />
                        
                        <div className='card-footer w-60 mx-7'>
                            <h3 class="text-lg">Employee Management System</h3>
                            <span class="font-normal ">Card 1 oasjd kasj akjnd kjs kjnd kqjw asckjd ksd ckjs dks dkcj sdkjc skdj cksdj </span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </section>
    );
}