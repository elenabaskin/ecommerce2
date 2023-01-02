import React from 'react';
import NavLogo from '../assets/logo-alt.png';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <header className="text-gray-600 body-font pt-1 bg-white bg-opacity-50">
        <div className=" container mx-auto rounded-lg border-solid border-2 border-darkSage border-opacity-50 flex flex-wrap p-5 flex-col bg-white bg-opacity-80 top-0 z-50 md:flex-row items-center">
          <Link
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            to="/"
          >
            <img
              src={NavLogo}
              alt="logo"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-12 h-12 p-1 bg-transparent rounded"
              viewBox="0 0 24 24"
            ></img>
            <span className="ml-3 text-xl text-logo font-logo hover:text-darkSage transition duration-300 ease-in-out">
              gentle.
            </span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link
              className="mr-5 text-darkGreen hover:text-darkSage font-lato"
              to="/"
            >
              home
            </Link>
            <Link
              className="mr-5 text-darkGreen hover:text-darkSage font-lato"
              to="/products"
            >
              products
            </Link>
            <Link
              className="mr-5 text-darkGreen hover:text-darkSage font-lato"
              to="/about"
            >
              about us
            </Link>
            <Link
              className="mr-5 text-darkGreen hover:text-darkSage font-lato"
              to="/contact"
            >
              contact us
            </Link>
            <Link
              className="ml-3 text-darkGreen hover:text-darkSage transition duration-300 ease-in-out"
              to="/bag"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-8 h-8"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
          </nav>
          <Link to="/login">
            <button className="inline-flex items-center bg-lightSage font-lato text-darkGreen border-solid border-darkGreen border-2 border-opacity-40 py-1 px-3 pl-5px focus:outline-none hover:bg-lightGrey transition duration-300 ease-in-out rounded text-base mt-4 md:mt-0">
              sign in
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Nav;
