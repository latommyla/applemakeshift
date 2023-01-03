import React from 'react'

import Lowerban from '../../images/Lowerbanner.jpeg'

export default function Lowerbanner() {
    return (
        <div class="m-auto font-lato max-w-screen-2xl">
            <div>
                <img class="m-auto w-screen p-4 md:p-10" src={Lowerban} alt="Play More Live More" />
            </div>
        </div>
    );
}