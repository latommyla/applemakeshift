import React from 'react'

import Calendly from '../images/Calendlylogo.png'

import { Card } from 'flowbite-react'

// Game Manual
import Manual60Games from '../images/pdfs/60GamesManual.pdf'
import Manual412Games from '../images/pdfs/412GamesManual.pdf'
import Manual3000Games from '../images/pdfs/3000GamesManual.pdf'
import Manual3500Games from '../images/pdfs/3500GamesManual.pdf'
import Manual4500Games from '../images/pdfs/4500GamesManual.pdf'
import Manual4500Games4p from '../images/pdfs/4500GamesManual4p.pdf'
import Manual4700Games from '../images/pdfs/4700GamesManual.pdf'
import TR1Manual from '../images/pdfs/TR16296Manual.pdf'
import TR2Manual from '../images/pdfs/TR29043Manual.pdf'

// Pinball Manual
import Pinball322Manual from '../images/pdfs/322PinballManual.pdf'
import Pinball13062030Manual from '../images/pdfs/13062030PinballManual.pdf'
import PinballButtonCallout from '../images/pdfs/PinballButtonCallouts.pdf'
import Pinball11076296Manual from '../images/pdfs/11076296PinballManual.pdf'

// Racing Manual
import RacingManual from '../images/pdfs/Racing107Manual.pdf'

// Accessory Manual
import LEDDimmer from '../images/pdfs/LEDDimmerSwitchKit.pdf'
import ArcadeStool from '../images/pdfs/AdjustableStoolsInstructions.pdf'
import SwivelBarStool from '../images/pdfs/SwivelBarStool.pdf'
import CoinSlot from '../images/pdfs/CoinSlotFreePlay.pdf'
import CustomConfigure from '../images/pdfs/CustomConfigure.pdf'

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
                    <div class="text-center row-span-3">
                        <p class="text-2xl font-bold pb-4"> Arcade Manuals </p>
                        <a href={Manual60Games} target="_none"><p class="text-xl hover:underline mb-3"> 2 Player - 60 Games Manual </p></a>
                        <a href={Manual412Games} target="_none"><p class="text-xl hover:underline mb-3"> 2 Player - 412, 750, & 1162 Games Manual </p></a>
                        <a href={Manual3000Games} target="_none"><p class="text-xl hover:underline mb-3"> 2 Player - 3000 Games Manual </p></a>
                        <a href={Manual3500Games} target="_none"><p class="text-xl hover:underline mb-3"> 2 Player - 3500 Games Manual </p></a>
                        <a href={Manual4500Games} target="_none"><p class="text-xl hover:underline mb-3"> 2 Player - 4500 Games Manual </p></a>
                        <a href={Manual4500Games4p} target="_none"><p class="text-xl hover:underline mb-3"> 4 Player - 4500 Games Manual </p></a>
                        <a href={Manual4700Games} target="_none"><p class="text-xl hover:underline mb-3"> 2 Player - 4700 Games Manual </p></a>
                        <a href={TR1Manual} target="_none"><p class="text-xl hover:underline mb-3"> 2P/4P Slim & TR-1 6296 Games Manual </p></a>
                        <a href={TR2Manual} target="_none"><p class="text-xl hover:underline mb-3"> 4 Player TR-2 Shooter 9043 Games Manual </p></a>
                    </div>
                    <div class="pt-12 sm:pt-0 text-center row-span-3">
                        <p class="text-2xl font-bold pb-4"> Pinball Manuals </p>
                        <a href={Pinball322Manual} target="_none"><p class="text-xl hover:underline mb-3"> 322 Games Pinball Manual </p></a>
                        <a href={Pinball13062030Manual} target="_none"><p class="text-xl hover:underline mb-3"> 1306-2033 Games Pinball Manual </p></a>
                        <a href={PinballButtonCallout} target="_none"><p class="text-xl hover:underline mb-3"> Pinball/Arcade Combo Button Layout </p></a>
                        <a href={Pinball11076296Manual} target="_none"><p class="text-xl hover:underline mb-3"> 1107 + 6296 Pinball Combo Manual </p></a>
                    </div>
                    <div class="pt-6 sm:pt-0 text-center">
                        <p class="text-2xl font-bold pb-4 pt-10"> Racing Manuals </p>
                        <a href={RacingManual} target="_none"><p class="text-xl hover:underline mb-3"> 107 Games Sit-Down Racing Manual </p></a>
                    </div>
                    <div class="pt-8 sm:pt-0 text-center">
                        <p class="text-2xl font-bold pb-4 pt-10"> Accessory Manuals/Instructions </p>
                        <a href={LEDDimmer} target="_none"><p class="text-xl hover:underline mb-3"> LED Dimer Switch Kit Manual </p></a>
                        <a href={ArcadeStool} target="_none"><p class="text-xl hover:underline mb-3"> Adjustable Height Stools Assembly </p></a>
                        <a href={SwivelBarStool} target="_none"><p class="text-xl hover:underline mb-3"> Swivel Bar Stool Assembly </p></a>
                        <a href={CoinSlot} target="_none"><p class="text-xl hover:underline mb-3"> Coin Slot for Payment & Free Play </p></a>
                        <a href={CustomConfigure} target="_none"><p class="text-xl hover:underline mb-3"> Custom Configure Stand Up & Cocktail Arcades </p></a>
                    </div>
                </div>
            </div>
            <div class="pt-10 pb-10 text-center">
                <p class="text-2xl font-bold"> How-to Instructional Videos </p>
                <br></br>
                <p class="text-xl"><b>How to: </b><a href="https://www.youtube.com/watch?v=4j4Bk7h0A68" target="_blank" rel="noreferrer" class="hover:underline">Set Up Your 4 Player Slim/Full 3,500 and 4,500 System</a></p>
                <br></br>
                <p class="text-xl"><b>How to: </b><a href="https://www.youtube.com/watch?v=HoS6ruAu-E0" target="_blank" rel="noreferrer" class="hover:underline">Set Up and Use Your 4 Player Slim/Full 6296 System</a></p>
                <br></br>
                <p class="text-xl"><b>How to: </b><a href="https://www.youtube.com/watch?v=J7RwDcRuTXI" target="_blank" rel="noreferrer" class="hover:underline">Set Up your Elegant Series Cocktail</a></p>
                <br></br>
                <p class="text-xl"><b>How to: </b><a href="https://www.youtube.com/watch?v=OscnD3vmHEU" target="_blank" rel="noreferrer" class="hover:underline">Set Up Coin Play On Your Arcade</a></p>
                <br></br>
                <p class="text-xl"><b>How to: </b><a href="https://www.youtube.com/watch?v=V7hwb8OuLwY" target="_blank" rel="noreferrer" class="hover:underline">Open 26" & 32" TILT Cocktail Lift-Top</a></p>
            </div>
            <div class="pt-10 text-center">
                <Card href="mailto:tech@creative-arcades.com">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                        If you require more tech support, click here to email us.
                    </h5>
                </Card>
            </div>
        </div>
    );
} 