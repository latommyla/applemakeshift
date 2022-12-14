import React from 'react'

import Logo from '../images/creativearcadeslogo.png'

import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav class="bg-[#323233] h-11 m-auto">
            <div class="hidden justify-between items-center w-full md:flex md:w-auto" id="mobile-menu-2">
                    <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium items-center m-auto text-stone-300 font-sourcesans">
                        <li>
                        <Link to ="/"> 
                            <img src={Logo} alt="Creative Arcades" title="Creative Arcades" class="h-10"></img>
                        </Link>
                        </li>
                        <li>
                            <Link to="/" class="block md:hover:text-amber-500"> Home </Link>
                        </li>
                        <li>
                            <Link to="manuals" class="block md:hover:text-amber-500"> Arcades </Link>
                        </li>
                        <li>
                            <Link to="manuals" class="block md:hover:text-amber-500"> Pinball </Link>
                        </li>
                        <li>
                            <Link to="manuals" class="block md:hover:text-amber-500"> Gallery </Link>
                        </li>
                        <li>
                            <Link to="manuals" class="block md:hover:text-amber-500"> Help </Link>
                        </li>
                        <li>
                            <Link to="manuals" class="block md:hover:text-amber-500"> Contact </Link>
                        </li>
                        <li>
                            <Link to="manuals" class="block md:hover:text-amber-500"> Blog </Link>
                        </li>
                    </ul>
                </div>
        </nav>
    );
}