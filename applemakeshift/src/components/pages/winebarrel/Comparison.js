import React from "react";

import XLWine from "../../images/products/XLWine.png";
import WineBarrel24 from "../../images/products/24winebarrel.png";
import WineBarrel19 from "../../images/products/MidSizeBarrel.png";
import WineBarrel17 from "../../images/products/WineBarrel17.png";

export default function Comparison() {
  return (
    <div class="font-lato m-auto pb-10 sm:pb-20 items-center w-screen sm:max-w-screen-xl">
      <div class="m-auto pt-28 text-center">
        <p class="font-bold m-20 text-3xl md:text-5xl mt-2">
          Which Arcade is right for you?
        </p>
      </div>
      <div class="p-2 md:p-0 md:w-4/12 place-items-center justify-center m-auto grid md:gap-64 grid-cols-2 lg:grid-cols-4 text-center">
        <div class="pt-0 md:pt-16 md:w-52">
          <img
            class="w-32 h-32 md:w-44 md:h-44 m-auto"
            src={XLWine}
            alt="XL Wine Barrel Arcade"
          />
          <p class="pt-10 text-xl md:text-2xl font-bold"> XL Wine Barrel </p>
          <p class="mt-3 md:mt-8"> From $2199 </p>
          <button class="bg-blue-500 hover:bg-blue-400 text-white py-1 px-3 rounded-full mt-2">
            Buy
          </button>
          <p class="mt-2 hover:underline text-blue-500"> Learn more </p>
          <hr class="my-4 mx-auto h-1 bg-gray-200 rounded border-0 md:my-10"></hr>
          <div class="mt-10">
            <p class="text-xl md:text-2xl"> 60-412 </p>
            <p class="text-sm"> Games </p>
          </div>
          <div class="mt-10">
            <p class="text-xl md:text-2xl"> 26" </p>
            <p class="text-sm"> LCD </p>
          </div>
          <div class="mt-10">
            <p class="text-xl md:text-2xl"> 1-2 </p>
            <p class="text-sm"> Players </p>
          </div>
          <div class="mt-10">
            <p class="text-xl md:text-xl"> Trackball </p>
            <p class="text-sm"> Installed </p>
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
        <div class="pt-0 md:pt-16 md:w-52">
          <img
            class="w-32 h-32 md:w-44 md:h-44 m-auto"
            src={WineBarrel24}
            alt="24 Inch Wine Barrel Arcade"
          />
          <p class="pt-10 text-xl md:text-2xl font-bold"> 24" Wine Barrel </p>
          <p class="mt-3 md:mt-8"> From $2049 </p>
          <button class="bg-blue-500 hover:bg-blue-400 text-white py-1 px-3 rounded-full mt-2">
            Buy
          </button>
          <p class="mt-2 hover:underline text-blue-500"> Learn more </p>
          <hr class="my-4 mx-auto h-1 bg-gray-200 rounded border-0 md:my-10"></hr>
          <div class="mt-10">
            <p class="text-xl md:text-2xl"> 60-412 </p>
            <p class="text-sm"> Games </p>
          </div>
          <div class="mt-10">
            <p class="text-xl md:text-2xl"> 24" </p>
            <p class="text-sm"> LCD </p>
          </div>
          <div class="mt-10">
            <p class="text-xl md:text-2xl"> 1-2 </p>
            <p class="text-sm"> Players </p>
          </div>
          <div class="mt-10">
            <p class="text-xl md:text-xl"> Trackball </p>
            <p class="text-sm"> Installed </p>
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
          <img
            class="w-32 h-32 md:w-44 md:h-44 m-auto"
            src={WineBarrel19}
            alt="19 Inch Wine Barrel Arcade"
          />
          <p class="pt-10 text-xl md:text-2xl font-bold"> 19" Wine Barrel </p>
          <p class="mt-3 md:mt-8"> From $1899 </p>
          <button class="bg-blue-500 hover:bg-blue-400 text-white py-1 px-3 rounded-full mt-2">
            Buy
          </button>
          <p class="mt-2 hover:underline text-blue-500"> Learn more </p>
          <hr class="my-4 mx-auto h-1 bg-gray-200 rounded border-0 md:my-10"></hr>
          <div class="mt-10">
            <p class="text-xl md:text-2xl"> 60-412 </p>
            <p class="text-sm"> Games </p>
          </div>
          <div class="mt-10">
            <p class="text-xl md:text-2xl"> 19" </p>
            <p class="text-sm"> LCD </p>
          </div>
          <div class="mt-10">
            <p class="text-xl md:text-2xl"> 1-2 </p>
            <p class="text-sm"> Players </p>
          </div>
          <div class="mt-10">
            <p class="text-xl md:text-xl"> Trackball </p>
            <p class="text-sm"> Installed </p>
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
          <img
            class="w-32 h-32 md:w-44 md:h-44 m-auto"
            src={WineBarrel17}
            alt="17 Inch Wine Barrel Arcade"
          />
          <p class="pt-10 text-xl md:text-2xl font-bold"> 17" Wine Barrel </p>
          <p class="mt-3 md:mt-8"> From $1829 </p>
          <button class="bg-blue-500 hover:bg-blue-400 text-white py-1 px-3 rounded-full mt-2">
            Buy
          </button>
          <p class="mt-2 hover:underline text-blue-500"> Learn more </p>
          <hr class="my-4 mx-auto h-1 bg-gray-200 rounded border-0 md:my-10"></hr>
          <div class="mt-10">
            <p class="text-xl md:text-2xl"> 60-412 </p>
            <p class="text-sm"> Games </p>
          </div>
          <div class="mt-10">
            <p class="text-xl md:text-2xl"> 17" </p>
            <p class="text-sm"> LCD </p>
          </div>
          <div class="mt-10">
            <p class="text-xl md:text-2xl"> 1-2 </p>
            <p class="text-sm"> Players </p>
          </div>
          <div class="mt-10">
            <p class="text-xl md:text-xl"> Trackball </p>
            <p class="text-sm"> Installed </p>
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
