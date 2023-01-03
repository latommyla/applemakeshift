import React from 'react'

import Newyear from '../../images/Newyearslogo.png'

export default function Banner() {
    return (
        <div class="m-auto font-lato pt-10">
            <div>
                <img class="m-auto pl-10 md:pl-0 sm:w-5/12 sm:h-5/12 p-4 md:p-0" src={Newyear} alt="2023 Banner Logo" />
            </div>
        </div>
    );
}