import React from 'react'

import Standup from '../images/StandupIcon.png'
import Cocktail from '../images/CocktailIcon.png'
import Pinball from '../images/PinballIcon.png'
import Racing from '../images/RacingIcon.png'
import Barrel from '../images/BarrelIcon.png'

export default function Aracadespage() {
    return (
        <div class="flex m-auto md:m-auto md:pt-11">
            <div class="p-4 md:p-0 w-screen md:max-w-screen-md flex grid grid-cols-2 sm:grid-cols-5 md:grid-cols-5 m-auto place-items-center text-xs font-lato">
                <div class="pt-4 text-center ">
                    <a class="hover:text-amber-500">
                        <img src={Standup} class="w-20 w-20 rounded-lg transition ease-in-out" alt="Standup Arcades" title="Standup Arcades" /> STAND-UP </a>
                </div>
                <div class="pt-4 text-center">
                    <a class="hover:text-amber-500">
                        <img src={Cocktail} class="w-20 w-20 rounded-lg transition ease-in-out" alt="Standup Arcades" title="Standup Arcades" /> COCKTAIL </a>
                </div>
                <div class="pt-4 text-center">
                    <a class="hover:text-amber-500">
                        <img src={Pinball} class="w-20 w-20 rounded-lg transition ease-in-out" alt="Standup Arcades" title="Standup Arcades" /> PINBALL </a>
                </div>
                <div class="pt-4 text-center">
                    <a class="hover:text-amber-500">
                        <img src={Racing} class="w-20 w-20 rounded-lg transition ease-in-out" alt="Standup Arcades" title="Standup Arcades" /> RACING </a>
                </div>
                <div class="pt-4 text-center">
                    <a class="hover:text-amber-500">
                        <img src={Barrel} class="w-20 w-20 rounded-lg transition ease-in-out" alt="Standup Arcades" title="Standup Arcades" /> BARREL </a>
                </div>
            </div>
        </div>
    );
}