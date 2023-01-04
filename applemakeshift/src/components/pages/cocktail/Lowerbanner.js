import React from 'react'

import Lowerban from '../../images/Lowerbanner.jpeg'

export default function Lowerbanner() {
    return (
        <div class="m-auto font-lato w-screen sm:max-w-screen-2xl">
            <div>
                <img class="m-auto w-screen sm:p-10" src={Lowerban} alt="Play More Live More" />
            </div>
        </div>
    );
}