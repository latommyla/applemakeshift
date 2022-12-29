import React from 'react'

import Play from '../../images/Playmore.jpeg'

export default function Playmore() {
    return (
        <div class="w-screen m-auto font-lato p-6 bg-black">
            <div>
                <img class="m-auto w-7/12 h-fit p-4 md:p-0 rounded-lg" src={Play} alt="Play More, Live More." />
            </div>
        </div>
    );
}