import React from 'react'

import TR2Pinball from '../../images/products/TR2Pinball.png'
import ComboPinball7403 from '../../images/products/ComboPinball7403.png'
import ComboPinball1P from '../../images/products/ComboPinball1P.png'

export default function Comparison() {
    return (
        <div class="font-lato m-auto pb-10 sm:pb-20 items-center w-screen sm:max-w-screen-xl">
            <div class="m-auto pt-28 text-center">
                <p class="font-bold m-20 text-3xl md:text-5xl mt-2"> Which Arcade is right for you? </p>
            </div>
            <div class="p-2 md:p-0 md:w-4/12 place-items-center justify-center m-auto grid md:gap-72 grid-cols-1 sm:grid-cols-3 text-center">
                <div class="pt-0 md:pt-16 md:w-52">
                    <img class="w-32 h-32 md:w-44 md:h-44 m-auto" src={ TR2Pinball } alt="3 Sided Tilt Screen Cocktail" />
                    <p class="pt-10 text-xl md:text-2xl font-bold"> TR-2 Pinball </p>
                    <p class="mt-3 md:mt-8"> From $5599 </p>
                    <button class="bg-blue-500 hover:bg-blue-400 text-white py-1 px-3 rounded-full mt-2"> Buy </button>
                    <p class="mt-2 hover:underline text-blue-500"> Learn more </p>
                    <hr class="my-4 mx-auto h-1 bg-gray-200 rounded border-0 md:my-10"></hr>
                    <div class="mt-10">
                        <p class="text-xl md:text-2xl"> 327 </p>
                        <p class="text-sm"> Games </p>
                    </div>
                    <div class="mt-10">
                        <p class="text-xl md:text-2xl"> 49" </p>
                        <p class="text-sm"> 4K Main LCD </p>
                    </div>
                    <div class="mt-10">
                        <p class="text-xl md:text-2xl"> 32" </p>
                        <p class="text-sm"> Back LCD </p>
                    </div>
                    <div class="mt-10">
                        <p class="text-xl md:text-2xl"> 1-2 </p>
                        <p class="text-sm"> Players </p>
                    </div>
                    <div class="mt-10">
                        <p class="text-xl md:text-xl"> Full Forced Feedback </p>
                        <p class="text-sm"> Supported </p>
                    </div>
                    <div class="mt-10">
                        <p class="text-xl md:text-xl"> Trackball </p>
                        <p class="text-sm"> Not Supported </p>
                    </div>
                    <div class="mt-10">
                        <p class="text-xl md:text-xl"> Free Play </p>
                        <p class="text-sm"> Supported </p>
                    </div>
                    <div class="mt-10">
                        <p class="text-xl md:text-xl"> Coin Operated </p>
                        <p class="text-sm"> Supported </p>
                    </div>
                    <div class="mt-10">
                        <p class="text-xl md:text-xl"> 3 Year </p>
                        <p class="text-sm"> Warranty </p>
                    </div>
                    <hr class="my-4 mx-auto h-1 bg-gray-200 rounded border-0 md:my-10"></hr>
                </div>
                <div class="pt-14 md:pt-16 md:w-52">
                    <img class="w-32 h-32 md:w-44 md:h-44 m-auto" src={ ComboPinball7403 } alt="Combo Pinball 7403" />
                    <p class="pt-10 text-xl md:text-2xl font-bold"> 2 in 1 Combo (2P) </p>
                    <p class="mt-3 md:mt-8"> From $3999 </p>
                    <button class="bg-blue-500 hover:bg-blue-400 text-white py-1 px-3 rounded-full mt-2"> Buy </button>
                    <p class="mt-2 hover:underline text-blue-500"> Learn more </p>
                    <hr class="my-4 mx-auto h-1 bg-gray-200 rounded border-0 md:my-10"></hr>
                    <div class="mt-10">
                        <p class="text-xl md:text-2xl"> 1306-7043 </p>
                        <p class="text-sm"> Games </p>
                    </div>
                    <div class="mt-10">
                        <p class="text-xl md:text-2xl"> 43" </p>
                        <p class="text-sm"> Main LCD </p>
                    </div>
                    <div class="mt-10">
                        <p class="text-xl md:text-2xl"> 32" </p>
                        <p class="text-sm"> Back LCD </p>
                    </div>
                    <div class="mt-10">
                        <p class="text-xl md:text-2xl"> 1-2 </p>
                        <p class="text-sm"> Players </p>
                    </div>
                    <div class="mt-10">
                        <p class="text-xl md:text-xl"> Full Forced Feedback </p>
                        <p class="text-sm"> Not Supported </p>
                    </div>
                    <div class="mt-10">
                        <p class="text-xl md:text-xl"> Trackball </p>
                        <p class="text-sm"> Not Supported </p>
                    </div>
                    <div class="mt-10">
                        <p class="text-xl md:text-xl"> Free Play </p>
                        <p class="text-sm"> Supported </p>
                    </div>
                    <div class="mt-10">
                        <p class="text-xl md:text-xl"> Coin Operated </p>
                        <p class="text-sm"> Supported </p>
                    </div>
                    <div class="mt-10">
                        <p class="text-xl md:text-xl"> 3 Year </p>
                        <p class="text-sm"> Warranty </p>
                    </div>
                    <hr class="my-4 mx-auto h-1 bg-gray-200 rounded border-0 md:my-10"></hr>
                </div>
                <div class="pt-14 md:pt-16 md:w-52">
                    <img class="w-32 h-32 md:w-44 md:h-44 m-auto" src={ ComboPinball1P } alt="Tall Pub Table" />
                    <p class="pt-10 text-xl md:text-2xl font-bold"> 2 in 1 Combo (1P) </p>
                    <p class="mt-3 md:mt-8"> From $4399 </p>
                    <button class="bg-blue-500 hover:bg-blue-400 text-white py-1 px-3 rounded-full mt-2"> Buy </button>
                    <p class="mt-2 hover:underline text-blue-500"> Learn more </p>
                    <hr class="my-4 mx-auto h-1 bg-gray-200 rounded border-0 md:my-10"></hr>
                    <div class="mt-10">
                        <p class="text-xl md:text-2xl"> 2558 </p>
                        <p class="text-sm"> Games </p>
                    </div>
                    <div class="mt-10">
                        <p class="text-xl md:text-2xl"> 43" </p>
                        <p class="text-sm"> Main LCD </p>
                    </div>
                    <div class="mt-10">
                        <p class="text-xl md:text-2xl"> 32" </p>
                        <p class="text-sm"> Back LCD </p>
                    </div>
                    <div class="mt-10">
                        <p class="text-xl md:text-2xl"> 1 </p>
                        <p class="text-sm"> Players </p>
                    </div>
                    <div class="mt-10">
                        <p class="text-xl md:text-xl"> Full Forced Feedback </p>
                        <p class="text-sm"> Not Supported </p>
                    </div>
                    <div class="mt-10">
                        <p class="text-xl md:text-xl"> Trackball </p>
                        <p class="text-sm"> Supported </p>
                    </div>
                    <div class="mt-10">
                        <p class="text-xl md:text-xl"> Free Play </p>
                        <p class="text-sm"> Supported </p>
                    </div>
                    <div class="mt-10">
                        <p class="text-xl md:text-xl"> Coin Operated </p>
                        <p class="text-sm"> Supported </p>
                    </div>
                    <div class="mt-10">
                        <p class="text-xl md:text-xl"> 3 Year </p>
                        <p class="text-sm"> Warranty </p>
                    </div>
                    <hr class="my-4 mx-auto h-1 bg-gray-200 rounded border-0 md:my-10"></hr>
                </div>
            </div>
        </div>
    );
}