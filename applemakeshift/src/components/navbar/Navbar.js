import React from "react";

import Logo from "../images/creativearcadeslogo.png";

import { Navbar } from "flowbite-react";

import { Link } from "react-router-dom";

export default function Navbartest() {
  return (
    <Navbar
      fluid={true}
      class="bg-[#323233] h-11 sm:m-auto fixed w-screen z-10"
    >
      <div class="container relative flex flex-wrap sm:flex-nowrap items-center justify-center mx-auto">
        <div class="flex sm:flex-none sm:m-0 w-screen items-center sm:w-fit">
          <div class="m-auto">
            <a href="/">
              <img
                src={Logo}
                class="h-10 sm:mr-10 ml-8"
                alt="Creative Arcades Logo"
              />
            </a>
          </div>
          <div class="sm:hidden mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#D1D5DB"
              class="bi bi-bag hover:fill-white"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg>
          </div>
          <Navbar.Toggle class="absolute inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse>
          <div class="items-center w-full md:flex md:w-auto bg-[#323233] -mt-3 sm:mt-0 p-6 sm:p-0">
            <ul class="flex flex-col md:flex-row space-y-4 sm:space-y-0 md:space-x-11 md:text-xs md:font-medium items-center m-auto font-sourcesans text-gray-300">
              <li>
                <Link to="/" class="block md:hover:text-white">
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <hr class="border-1 w-60 sm:hidden"></hr>
              <li>
                <Link to="/standup" class="block md:hover:text-white">
                  {" "}
                  Arcades{" "}
                </Link>
              </li>
              <hr class="border-1 w-60 sm:hidden"></hr>
              <li>
                <Link to="/gallery" class="block md:hover:text-white">
                  {" "}
                  Gallery{" "}
                </Link>
              </li>
              <hr class="border-1 w-60 sm:hidden"></hr>
              <li>
                <Link to="/help" class="block md:hover:text-white">
                  {" "}
                  Help{" "}
                </Link>
              </li>
              <hr class="border-1 w-60 sm:hidden"></hr>
              <li>
                <Link to="/contact" class="block md:hover:text-white">
                  {" "}
                  Contact{" "}
                </Link>
              </li>
              <hr class="border-1 w-60 sm:hidden"></hr>
              <li>
                <Link to="/blog" class="block md:hover:text-white">
                  {" "}
                  Blog{" "}
                </Link>
              </li>
              <hr class="border-1 w-60 sm:hidden h-2"></hr>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="#D1D5DB"
                  class="bi bi-search hover:fill-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </li>
              <hr class="border-1 w-60 sm:hidden h-2"></hr>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="#D1D5DB"
                  class="bi bi-bag hover:fill-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </li>
            </ul>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
