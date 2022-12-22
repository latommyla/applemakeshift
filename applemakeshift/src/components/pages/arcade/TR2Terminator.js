import React from 'react'

import Terminator from '../../images/products/TR2Terminator.png'

export default function TR2Terminator() {
    return (
        <div class="w-screen-xl font-lato">
            <div class="mt-6 text-center bg-gray-100 p-3 animate-fade-down">
                <p> Free Shipping to Lower 48 States </p>
            </div>
            <div class="m-auto pt-10 text-center">
                <span class="text-orange-400 text-lg font-bold"> New </span>
                <p class="font-bold text-5xl mt-2"> TR-2 Terminator </p>
                <p class="mb-6 font-bold text-2xl"> Lightgun Arcade System. </p>
                <p> From $8499 </p>
                <div class="flex pb-6">
                    <div class="m-auto flex items-center p-2">
                    <button class="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded-full"> Buy </button>
                    <p class="text-center ml-4 hover:underline text-blue-500"> Learn more </p>
                    </div>
                </div>
                <img class="m-auto w-96 h-96" src={Terminator} alt="TR2 Terminator" />
            </div>
        </div>
    );
}