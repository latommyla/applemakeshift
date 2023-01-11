import React from 'react'

import { Link } from "react-router-dom";

import XLBarrel from '../../images/products/XLWineBarrel.png'

export default function XLWineBarrel() {
    return (
        <div class="w-screen-xl font-lato">
            <div class="mt-1 md:mt-6 text-center bg-gray-100 p-3 animate-none sm:animate-fade-down">
                <p> Free Shipping to Lower 48 States </p>
            </div>
            <div class="m-auto pt-10 text-center">
                <span class="text-orange-400 text-md md:text-lg font-bold"> New </span>
                <p class="font-bold text-4xl md:text-5xl mt-2"> XL Wine Barrel </p>
                <p class="mb-4 md:mb-6 font-bold text-xl md:text-2xl"> Loads of Fun. </p>
                <p> From $2199 </p>
                <div class="flex pb-6">
                    <div class="m-auto flex items-center p-2">
                    <Link to="/product"><button class="bg-blue-500 hover:bg-blue-400 text-white py-1 md:py-2 px-3 md:px-4 rounded-full"> Buy </button></Link>
                    <p class="text-center ml-4 hover:underline text-blue-500"> Learn more </p>
                    </div>
                </div>
                <img class="m-auto w-96 h-96 p-4 md:p-0" src={XLBarrel} alt="XL Wine Barrel Arcade" />
            </div>
        </div>
    );
}