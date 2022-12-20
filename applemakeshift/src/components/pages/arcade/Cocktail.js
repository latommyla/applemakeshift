import React from 'react'

import CocktailTilt from '../../images/products/CocktailTilt.png'

export default function Cocktail() {
    return (
        <div class="w-screen-xl font-lato pt-20 text-white">
            <div class="m-auto pt-28 text-center bg-black pb-16">
                <span class="text-orange-400 text-lg font-bold"> Best Seller </span>
                <p class="font-bold text-5xl mt-2"> Tilt-Screen Cocktail </p>
                <p class="mb-6 font-bold text-2xl"> 3-Sided Arcade Machine.</p>
                <p> From $2598 </p>
                <div class="flex pb-6">
                    <div class="m-auto flex items-center p-2">
                    <button class="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded-full"> Buy </button>
                    <p class="text-center ml-4"> Learn more </p>
                    </div>
                </div>
                <img class="m-auto w-96 h-96" src={CocktailTilt} />
            </div>
        </div>
    );
}