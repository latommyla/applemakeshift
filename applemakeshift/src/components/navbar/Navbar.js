import React from 'react'

import Logo from '../images/creativearcadeslogo.png'

import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav class="bg-[#323233] h-11 m-auto fixed w-screen z-10">
            <div class="hidden items-center w-full md:flex md:w-auto">
                    <ul class="flex flex-col md:flex-row md:space-x-11 md:text-xs md:font-medium items-center m-auto text-white font-sourcesans text-gray-300">
                        <li>
                            <Link to ="/"> 
                                <img src={Logo} alt="Creative Arcades" title="Creative Arcades" class="h-10"></img>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" class="block md:hover:text-white"> Home </Link>
                        </li>
                        <li>
                            <Link to="standup" class="block md:hover:text-white"> Arcades </Link>
                        </li>
                        <li>
                            <Link to="gallery" class="block md:hover:text-white"> Gallery </Link>
                        </li>
                        <li>
                            <Link to="help" class="block md:hover:text-white"> Help </Link>
                        </li>
                        <li>
                            <Link to="contact" class="block md:hover:text-white"> Contact </Link>
                        </li>
                        <li>
                            <Link to="blog" class="block md:hover:text-white"> Blog </Link>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#D1D5DB" class="bi bi-search hover:fill-white" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#D1D5DB" class="bi bi-bag hover:fill-white" viewBox="0 0 16 16">
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                            </svg>
                        </li>
                    </ul>
                </div>
        </nav>
    );
}