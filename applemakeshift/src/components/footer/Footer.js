import React from 'react'

import Logo from '../images/creativearcadeslogo.png'

import { Footer } from 'flowbite-react'

export default function FooterMain() {
    return (
        <div class="w-screen m-auto bg-gray-100">
            <div className="sm:max-w-screen-xl m-auto">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <img
                            href="/"
                            src={Logo}
                            alt="Creative Arcades Logo"
                            class="h-20 mt-4 sm:mt-20 m-auto"
                        />
                    </div>
                    <div className="p-4 m-auto grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-4 sm:gap-12">
                        <div>
                            <Footer.Title title="Navigate" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="/">
                                    Home
                                </Footer.Link>
                                <Footer.Link href="#">
                                    All Products
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Manuals/Instructions
                                </Footer.Link>
                                <Footer.Link href="#">
                                    About Us
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Our Policies" />
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">
                                    Terms & Conditions
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Shipping & Delivery
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Return Policy
                                </Footer.Link>
                                <Footer.Link href="#">
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
                                    Click to Schedule Tech Call
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
                                    Click to Schedule Tech Call
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                    <div className="sm:flex sm:items-center sm:justify-center -mt-5 pb-4">
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