import React from 'react'

import Calendly from '../images/Calendlylogo.png'

import Manual60Games from '../images/pdfs/60GamesManual.pdf'
import Manual412Games from '../images/pdfs/412GamesManual.pdf'
import Manual3000Games from '../images/pdfs/3000GamesManual.pdf'
import Manual3500Games from '../images/pdfs/3500GamesManual.pdf'
import Manual4500Games from '../images/pdfs/4500GamesManual.pdf'
import Manual4500Games4p from '../images/pdfs/4500GamesManual4p.pdf'
import Manual4700Games from '../images/pdfs/4700GamesManual.pdf'

import Pinball322Manual from '../images/pdfs/322PinballManual.pdf'
import Pinball13062030Manual from '../images/pdfs/13062030PinballManual.pdf'
import PinballButtonCallout from '../images/pdfs/PinballButtonCallouts.pdf'
import Pinball11076296Manual from '../images/pdfs/11076296PinballManual.pdf'

export default function Manuals() {
    return (
        <div class="m-auto pb-10 pt-16 p-2 max-w-screen-lg">
            <p class="p-10 font-bold text-3xl md:text-4xl mt-2 text-center"> Manuals and Instructions </p>
            <div class="flex pb-6">
                <div class="m-auto text-center">
                    <p class="text-3xl"> Need help? </p>
                    <p class="font-bold"> Click the image to schedule a 15 minute tech call.</p>
                    <a href="https://calendly.com/creativearcades/?ref=joystick" target="_none"><img class="-mt-6 h-60 hover:opacity-80" src={Calendly} alt="Schedule Tech Call" title="Schedule Tech Call"></img></a>
                </div>
            </div>
            <div>
                <div class="m-auto grid grid-cols-1 sm:grid-cols-2 pb-10">
                    <div class="m-auto text-center row-span-3">
                        <p class="text-2xl font-bold pb-4"> Arcade Manuals </p>
                        <a href={ Manual60Games } target="_none"><p class="text-xl hover:underline mb-3"> 2 Player - 60 Games Manual </p></a>
                        <a href={ Manual412Games } target="_none"><p class="text-xl hover:underline mb-3"> 2 Player - 412, 750, & 1162 Games Manual </p></a>
                        <a href={ Manual3000Games } target="_none"><p class="text-xl hover:underline mb-3"> 2 Player - 3000 Games Manual </p></a>
                        <a href={ Manual3500Games } target="_none"><p class="text-xl hover:underline mb-3"> 2 Player - 3500 Games Manual </p></a>
                        <a href={ Manual4500Games } target="_none"><p class="text-xl hover:underline mb-3"> 2 Player - 4500 Games Manual </p></a>
                        <a href={ Manual4500Games4p } target="_none"><p class="text-xl hover:underline mb-3"> 4 Player - 4500 Games Manual </p></a>
                        <a href={ Manual4700Games } target="_none"><p class="text-xl hover:underline mb-3"> 2 Player - 4700 Games Manual </p></a>
                    </div>
                    <div class="m-auto text-center">
                        <p class="text-2xl font-bold pb-4"> Pinball Manuals </p>
                        <a href={ Pinball322Manual } target="_none"><p class="text-xl hover:underline mb-3"> 322 Games Pinball Manual </p></a>
                        <a href={ Pinball13062030Manual } target="_none"><p class="text-xl hover:underline mb-3"> 1306-2033 Games Pinball Manual </p></a>
                        <a href={ PinballButtonCallout } target="_none"><p class="text-xl hover:underline mb-3"> Pinball/Arcade Combo Button Layout </p></a>
                        <a href={ Pinball11076296Manual } target="_none"><p class="text-xl hover:underline mb-3"> 1107 + 6296 Pinball Combo Manual </p></a>
                    </div>
                </div>
            </div>
        </div>
    );
} 