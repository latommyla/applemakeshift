import React from 'react'

import MidSize from '../../images/products/XLWine.png'

export default function XLWine() {
    return (
        <div class="w-screen-xl font-lato pt-20 text-white">
            <div class="m-auto pt-14 md:pt-28 text-center bg-black pb-16">
                <span class="text-orange-400 text-md md:text-lg font-bold"> New </span>
                <p class="font-bold text-4xl md:text-5xl mt-2"> XL Wine Barrel </p>
                <p class="mb-4 md:mb-6 font-bold text-xl md:text-2xl"> Full Size. </p>
                <p> From $2199 </p>
                <div class="flex pb-6">
                    <div class="m-auto flex items-center p-2">
                    <button class="bg-blue-500 hover:bg-blue-400 text-white py-1 md:py-2 px-3 md:px-4 rounded-full"> Buy </button>
                    <p class="text-center ml-4 hover:underline text-blue-500"> Learn more </p>
                    </div>
                </div>
                <img class="m-auto w-96 h-96 p-4 md:p-0" src={MidSize} alt="XL Wine Barrel Arcade" />
            </div>
        </div>
    );
}