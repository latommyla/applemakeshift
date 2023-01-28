import React from 'react'

import Logo from '../images/creativearcadeslogo.png'

import { Footer } from 'flowbite-react'

export default function FooterMain() {
    return (
        <div class="w-screen m-auto bg-gray-100">
            <div className="sm:max-w-screen-xl m-auto">
                <div className="grid w-full justify-center sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <img
                            href="/"
                            src={Logo}
                            alt="Creative Arcades Logo"
                            class="h-20 mt-4 sm:mt-20 m-auto ml-24"
                        />
                    </div>
                    <div className="mt-4 sm:mt-0 p-5 m-auto grid grid-cols-2 gap-14 sm:mt-4 sm:grid-cols-4 sm:gap-12">
                        <div>
                            <Footer.Title title="Navigate" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="/">
                                    Home
                                </Footer.Link>
                                <Footer.Link href="/standup">
                                    All Products
                                </Footer.Link>
                                <Footer.Link href="/manualsandinstructions">
                                    Manuals/Instructions
                                </Footer.Link>
                                <Footer.Link href="/aboutus">
                                    About Us
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Our Policies" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="/termsandconditions">
                                    Terms & Conditions
                                </Footer.Link>
                                <Footer.Link href="/privacypolicy">
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link href="/shippinganddelivery">
                                    Shipping & Delivery
                                </Footer.Link>
                                <Footer.Link href="/returnpolicy">
                                    Return Policy
                                </Footer.Link>
                                <Footer.Link href="/warranty">
                                    Warranty
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Get Connected" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="/affiliateprogram">
                                    Affiliate Program
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Sales
                                </Footer.Link>
                                <Footer.Link href="mailto:logistics@creative-arcades.com">
                                    Order Status
                                </Footer.Link>
                                <Footer.Link href="https://calendly.com/creativearcades">
                                    Schedule Tech Call
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="https://www.facebook.com/creativearcades">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-6 h-6 m-auto">
                                        <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                    </svg>
                                </Footer.Link>
                                <Footer.Link href="https://www.instagram.com/creativearcades/">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-6 h-6 m-auto">
                                        <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                    </svg>
                                </Footer.Link>
                                <Footer.Link href="https://www.youtube.com/@creativearcades1755/featured">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-6 h-6 m-auto">
                                        <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                                    </svg>
                                </Footer.Link>
                                <Footer.Link href="https://www.pinterest.com/creativearcades">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="ml-14 w-6 h-6">
                                        <path fill="currentColor" d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
                                    </svg>
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="flex items-center justify-center -mt-3 pb-3 sm:-mt-5 sm:pb-4">
                    <Footer.Copyright
                        href="/"
                        by="Creative Arcades™"
                        year={2023}
                    />
                </div>
            </div>
        </div>
    );
}