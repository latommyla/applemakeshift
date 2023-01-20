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
                            class="h-20 mt-4 sm:mt-20 m-auto"
                        />
                    </div>
                    <div className="mt-4 sm:mt-0 p-5 m-auto grid grid-cols-2 gap-14 sm:mt-4 sm:grid-cols-4 sm:gap-12">
                        <div>
                            <Footer.Title title="Navigate" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="/">
                                    Home
                                </Footer.Link>
                                <Footer.Link href="#">
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
                                <Footer.Link href="#">
                                    Affiliate Program
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Sales
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Order Status
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Schedule Tech Call
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Get Connected" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">
                                    Affiliate Program
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Sales
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Order Status
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Schedule Tech Call
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                    <div className="flex items-center justify-center -mt-3 pb-3 sm:-mt-5 sm:pb-4">
                        <Footer.Copyright
                            href="#"
                            by="Creative Arcades™"
                            year={2023}
                        />
                    </div>
            </div>
        </div>
    );
}