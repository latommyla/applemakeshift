import React, { useState } from "react";

const Product3 = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    return (
        <div className="md:flex items-start justify-center py-20 2xl:px-20 md:px-6 px-4 font-lato">
            <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                <img className="w-full" alt="TR2 Terminator Stand Up" src="https://cdn.shopify.com/s/files/1/0087/4184/7076/products/BronzeMedallion-Cutout-Web.jpg?v=1667587014" />
                <img className="mt-6 w-full" alt="TR2 Terminator Stand Up Custom Artwork" src="https://cdn.shopify.com/s/files/1/0087/4184/7076/products/TR1-01CustomArt_28b49303-aa56-4d9a-9618-87ce3fc0e6a1.jpg?v=1667587014" />
            </div>
            <div className="md:hidden">
                <img className="w-full" alt="img of a girl posing" src="https://i.ibb.co/QMdWfzX/component-image-one.png" />
                <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
                    <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/cYDrVGh/Rectangle-245.png" />
                    <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/f17NXrW/Rectangle-244.png" />
                    <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/cYDrVGh/Rectangle-245.png" />
                    <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/f17NXrW/Rectangle-244.png" />
                </div>
            </div>
            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div className="border-b border-gray-200 pb-6">
                    <p className="text-sm leading-none text-gray-600"> Stand-Up Arcades </p>
                    <h1
                        className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
                    >
                        TR-2 Terminator Stand Up
                    </h1>
                </div>
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-base leading-4 text-gray-800"> Artwork </p>
                    <div className="flex items-center justify-center">
                        <p className="text-sm leading-none text-gray-600"> Bronze Medallion </p>
                        <div
                            className="
								w-6
								h-6
								bg-gradient-to-b
								from-gray-900
								to-indigo-500
								ml-3
								mr-4
								cursor-pointer
							"
                        ></div>
                        <svg className="cursor-pointer" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L1 9" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-base leading-4 text-gray-800">Size</p>
                    <div className="flex items-center justify-center">
                        <p className="text-sm leading-none text-gray-600 mr-3">38.2</p>
                        <svg className="cursor-pointer" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L1 9" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <button
                    className="
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
						text-base
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-gray-800
						w-full
						py-4
						hover:bg-gray-700
					"
                >
                    ADD TO CART
                </button>
                <div>
                    <p className="xl:pr-0 text-base lg:leading-normal leading-normal mt-7">Awaken the James Bond in you and 007 your way through <b>100+ Shooting Games</b> with Creative Arcades NEW TR-2 Terminator Series Light Gun Arcade! Set your sights on our top of the line shooting arcade machine with exclusive <b>Light Gun Arcade System</b> built with precision aim and real time recoil feedback. The only arcade in its class with Light Gun compatibility across multiple console games.</p>
                </div>
                <div>
                    <div className="border-t border-b py-4 mt-7 border-gray-200">
                        <div onClick={() => setShow(!show)} className="flex justify-between items-center cursor-pointer">
                            <p className="text-base leading-4"> Features & Specifications </p>
                            <button
                                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                aria-label="show or hide"
                            >
                                <svg className={"transform " + (show ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className={"pt-4 text-base leading-normal pr-12 mt-4 " + (show ? "block" : "hidden")} id="sect">
                            <b>FULL-SIZE COMMERCIAL GRADE:</b> Equipped with the highest quality SANWA joysticks, Giant 43" HD LCD Monitor, included stools, and more! We stand behind our products because we are industry leaders in quality craftsmanship and design.
                        </div>
                        <div className={"text-base leading-normal pr-12 mt-4 " + (show ? "block" : "hidden")} id="sect">
                            <b>9043 CLASSIC GAMES INCLUDED:</b> The TR-2 system comes with 9043 games from the last 4 decades of consoles with 100+ Shooting Action Packed shooting games! Including the classics from your childhood. The 43” HD display gives you immersive gameplay with its larger field of view, you’ll never miss another detail in the game again! The first of its kind, save full gameplays as you’ve never left. From classics to fighters, to the latest RPG games. All games come completely mapped, gameplay ready.
                        </div>
                        <div className={"text-base leading-normal pr-12 mt-4 " + (show ? "block" : "hidden")} id="sect">
                            <b>20+ EMULATORS:</b> Our new TR-2 Light Gun System now comes with an impressive presentation of major market video Game Consoles like Nintendo 64, PSP, Play Station 1, Dream Cast, Wii, Game Cube and more.
                            From classics to fighters, to the latest RPG games. All games come completely mapped, gameplay ready.
                        </div>
                        <div className={"text-base leading-normal pr-12 mt-4 " + (show ? "block" : "hidden")} id="sect">
                            <b>PLUG AND PLAY:</b> Minor assembly required. 4 bolts and a few clips on a wiring harness ( 10 min process - no experience required ) Please call the tech line for any installation questions or assistance. Next, simply plug your arcade in and choose from a comprehensive game list. Supports free-play and coin-play.
                        </div>
                        <div className={"text-base leading-normal pr-12 mt-4 " + (show ? "block" : "hidden")} id="sect">
                            <b>LED LIGHTS:</b> The system is dressed with fully addressable remote-controlled RGB lights from top to bottom, its sleek and fluid T-Molding LED design. 
                        </div>
                        <div className={"text-base leading-normal pr-12 mt-4 " + (show ? "block" : "hidden")} id="sect">
                            <b>CUP HOLDERS:</b> Cup holders and bottle openers, you’ll never leave your game room again.
                        </div>
                        <div className={"text-base leading-normal pr-12 mt-4 " + (show ? "block" : "hidden")} id="sect">
                            <b>3-YEAR WARRANTY:</b> We guarantee that the arcade will operate as intended - if not, we expedite brand new parts for easy repair. Purchase with confidence that this classic arcade was built to play and built to last.
                        </div>
                        <div className={"text-base leading-normal pr-12 mt-4 " + (show ? "block" : "hidden")} id="sect">
                            <b>DIMENSIONS:</b> 39.5"W x 31.5"D x 68.75"H. See images below for specific dimensions.
                        </div>
                        <div className={"text-base leading-normal pr-12 mt-4 " + (show ? "block" : "hidden")} id="sect">
                            <b>SPECIFICATIONS:</b> CPU: I5-9400F, RAM: 8G, Graphic Card: GTX 750Ti, SSD: 480 GB
                        </div>
                    </div>
                </div>
                <div>
                    <div className="border-b py-4 border-gray-200">
                        <div onClick={() => setShow2(!show2)} className="flex justify-between items-center cursor-pointer">
                            <p className="text-base leading-4">Product Features</p>
                            <button
                                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                aria-label="show or hide"
                            >
                                <svg className={"transform " + (show2 ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className={"pt-4 text-base leading-normal pr-12 mt-4 " + (show2 ? "block" : "hidden")} id="sect">
                            <b>Arcade Type:</b> Cabinet
                        </div>
                        <div className={"text-base leading-normal pr-12 mt-4 " + (show2 ? "block" : "hidden")} id="sect">
                            <b>Players:</b> 4
                        </div>
                        <div className={"text-base leading-normal pr-12 mt-4 " + (show2 ? "block" : "hidden")} id="sect">
                            <b>Game Count:</b> 9043 (100+ Shooting Games)
                        </div>
                        <div className={"text-base leading-normal pr-12 mt-4 " + (show2 ? "block" : "hidden")} id="sect">
                            <b>Trackball:</b> Yes
                        </div>
                        <div className={"text-base leading-normal pr-12 mt-4 " + (show2 ? "block" : "hidden")} id="sect">
                            <b>Credits:</b> Coin Operated + Free Play Supported
                        </div>
                        <div className={"text-base leading-normal pr-12 mt-4 " + (show2? "block" : "hidden")} id="sect">
                            <b>Stools:</b> 2
                        </div>
                        <div className={"text-base leading-normal pr-12 mt-4 " + (show2 ? "block" : "hidden")} id="sect">
                            <b>Warranty:</b> 3-year parts warranty
                        </div>
                        <div className={"text-base leading-normal pr-12 mt-4 " + (show2 ? "block" : "hidden")} id="sect">
                            <b>Overall Size:</b> 39.5"W x 31.5"D x 68.75"H
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product3;
