import React from 'react'

import Terminator from '../../images/products/TR2Terminator.png'

export default function TR2Terminator() {
    return (
        <div class="w-screen-xl font-lato">
            <div class="mt-10 text-center bg-gray-100 p-3 animate-fade-down">
                <p> Free Shipping to Lower 48 States </p>
            </div>
            <div class="m-auto pt-10 text-center animate-fade-in">
                <span class="text-orange-400"> New </span>
                <p class="font-bold text-5xl mt-4"> TR-2 Terminator </p>
                <p class="mb-10 font-bold text-xl"> Lightgun Arcade System. </p>
                <img class="m-auto w-96 h-96" src={ Terminator } />
            </div>
        </div>
    );
}