import React from 'react'

import Terminator from '../../images/products/TR2Terminator.png'
import Cocktail from '../../images/products/CocktailTilt.png'
import Racing from '../../images/products/RacingSitDown.png'
import Pinball from '../../images/products/PinballTR2.png'

export default function Comparison() {
    return (
        <div class="font-lato m-auto pb-20">
            <div class="m-auto pt-28 text-center">
                <p class="font-bold text-5xl mt-2"> Which Arcade is right for you? </p>
            </div>
            <div class="w-3/4 flex place-items-center m-auto grid grid-cols-4 text-center">
                <div class="pt-28">
                    <img class="w-44 h-44" src={ Terminator } />
                    <p class="pt-10 text-xl font-bold"> TR2 Terminator </p>
                    <p class="mt-8"> From $8499 </p>
                    <button class="bg-blue-500 hover:bg-blue-400 text-white py-1 px-3 rounded-full mt-2"> Buy </button>
                    <p class="mt-2"> Learn more </p>
                </div>
                <div class="pt-28">
                    <img class="w-44 h-44" src={ Pinball }/>
                    <p class="pt-10 text-xl font-bold"> Virtual Pinball TR2 </p>
                    <p class="mt-8"> From $5599 </p>
                    <button class="bg-blue-500 hover:bg-blue-400 text-white py-1 px-3 rounded-full mt-2"> Buy </button>
                    <p class="mt-2"> Learn more </p>
                </div>
                <div class="pt-28">
                    <img class="w-44 h-44" src={ Cocktail }/>
                    <p class="pt-10 text-xl font-bold"> 3-Sided Tilt Screen </p>
                    <p class="mt-8"> From $2598 </p>
                    <button class="bg-blue-500 hover:bg-blue-400 text-white py-1 px-3 rounded-full mt-2"> Buy </button>
                    <p class="mt-2"> Learn more </p>
                </div>
                <div class="pt-28">
                    <img class="w-44 h-44" src={ Racing }/>
                    <p class="pt-10 text-xl font-bold"> Racing Sit Down</p>
                    <p class="mt-8"> From $3999 </p>
                    <button class="bg-blue-500 hover:bg-blue-400 text-white py-1 px-3 rounded-full mt-2"> Buy </button>
                    <p class="mt-2"> Learn more </p>
                </div>
            </div>
        </div>
    );
}