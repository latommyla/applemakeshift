import React from "react";

import Logo from "../images/creativearcadeslogo.png";

import { Footer } from "flowbite-react";
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsYoutube,
} from "react-icons/bs";

export default function FooterMain() {
  return (
    <div class="w-screen m-auto bg-gray-100">
      <div>
        <div className="m-auto max-w-screen-xl grid w-full justify-center sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <img
              href="/"
              src={Logo}
              alt="Creative Arcades Logo"
              class="h-20 mt-4 sm:mt-20 m-auto ml-24"
            />
          </div>
          <div className="mt-4 sm:mt-0 p-5 m-auto grid grid-cols-2 gap-14 sm:mt-4 sm:grid-cols-3 sm:gap-12">
            <div>
              <Footer.Title title="Navigate" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="/">Home</Footer.Link>
                <Footer.Link href="/standup">All Products</Footer.Link>
                <Footer.Link href="/manualsandinstructions">
                  Manuals/Instructions
                </Footer.Link>
                <Footer.Link href="/aboutus">About Us</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Our Policies" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="/termsandconditions">
                  Terms & Conditions
                </Footer.Link>
                <Footer.Link href="/privacypolicy">Privacy Policy</Footer.Link>
                <Footer.Link href="/shippinganddelivery">
                  Shipping & Delivery
                </Footer.Link>
                <Footer.Link href="/returnpolicy">Return Policy</Footer.Link>
                <Footer.Link href="/warranty">Warranty</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Get Connected" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="/affiliateprogram">
                  Affiliate Program
                </Footer.Link>
                <Footer.Link href="#">Sales</Footer.Link>
                <Footer.Link href="mailto:logistics@creative-arcades.com">
                  Order Status
                </Footer.Link>
                <Footer.Link href="https://calendly.com/creativearcades">
                  Schedule Tech Call
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <div className="w-screen bg-gray-200">
          <div className="max-w-6xl m-auto py-3 px-4 sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="/" by="Creative Arcades™" year={2023} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <a
                href="https://www.facebook.com/creativearcades"
                target="_blank"
              >
                <BsFacebook
                  size={20}
                  className="hover:opacity-70"
                  color="gray"
                />
              </a>
              <a
                href="https://www.instagram.com/creativearcades/"
                target="_blank"
              >
                <BsInstagram
                  size={20}
                  className="hover:opacity-70"
                  color="gray"
                />
              </a>
              <a
                href="https://www.pinterest.com/creativearcades"
                target="_blank"
              >
                <BsPinterest
                  size={20}
                  className="hover:opacity-70"
                  color="gray"
                />
              </a>
              <a
                href="https://www.youtube.com/@creativearcades1755/featured"
                target="_blank"
              >
                <BsYoutube
                  size={20}
                  color="gray"
                  className="hover:opacity-70"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
