import React from 'react'

import Standup from '../../images/StandupIcon.png'
import Cocktail from '../../images/CocktailIcon.png'
import Pinball from '../../images/PinballIcon.png'
import Racing from '../../images/RacingIcon.png'
import Barrel from '../../images/BarrelIcon.png'

export default function Aracadespage() {
    return (
        <div class="m-auto md:m-auto pt-7 md:pt-11">
            <div class="p-4 md:p-0 overflow-y-scroll w-screen md:max-w-screen-sm flex md:grid sm:grid-cols-5 md:grid-cols-5 m-auto place-items-center text-xs font-lato animate-fade-in">
                <div class="pt-4 text-center">
                    <a class="hover:text-amber-500">
                        <img src={Standup} class="w-20 w-20 rounded-lg transition ease-in-out" alt="Standup Arcades" title="Standup Arcades" /><p class="mt-2"> STAND-UP </p></a>
                </div>
                <div class="pt-4 text-center">
                    <a class="hover:text-amber-500">
                        <img src={Cocktail} class="w-20 w-20 rounded-lg transition ease-in-out" alt="Cocktail Arcades" title="Cocktail Arcades" /><p class="mt-2"> COCKTAIL </p></a>
                </div>
                <div class="pt-4 text-center">
                    <a class="hover:text-amber-500">
                        <img src={Pinball} class="w-20 w-20 rounded-lg transition ease-in-out" alt="Pinball Machine" title="Pinball Machines" /><p class="mt-2"> PINBALL </p></a>
                </div>
                <div class="pt-4 text-center">
                    <a class="hover:text-amber-500">
                        <img src={Racing} class="w-20 w-20 rounded-lg transition ease-in-out" alt="Racing Arcades" title="Racing Arcades" /><p class="mt-2"> RACING </p></a>
                </div>
                <div class="pt-4 text-center">
                    <a class="hover:text-amber-500">
                        <img src={Barrel} class="w-20 w-20 rounded-lg transition ease-in-out" alt="Barrel Arcades" title="Barrel Arcades" /><p class="mt-2"> BARREL </p></a>
                </div>
            </div>
        </div>
    );
}