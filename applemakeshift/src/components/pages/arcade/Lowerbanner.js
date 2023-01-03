import React from 'react'

import Lowerban from '../../images/Lowerbanner.jpeg'

export default function Lowerbanner() {
    return (
        <div class="m-auto font-lato sm:w-screen">
            <div>
                <img class="m-auto sm:w-7/12 sm:h-5/12 p-4 md:p-0" src={Lowerban} alt="Play More Live More" />
            </div>
        </div>
    );
}