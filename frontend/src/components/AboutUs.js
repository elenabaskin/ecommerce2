import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div id="about">
      <section className="text-gray-600 body-font mt-4">
        <div className="container px-5 py-4 mx-auto flex flex-col bg-offWhite bg-opacity-20 border-darkSage border-solid border-2 border-opacity-80">
          <h1 className="text-darkSage text-center text-3xl underline decoration-dotted decoration-lightSage font-bold font-lato mb-1">
            about us
          </h1>
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="plant art"
                className="object-cover object-center h-full w-full opacity-80"
                src="https://marketplace.canva.com/EAE6SChKUdA/1/0/1600w/canva-green-and-peach-botanic-room-minimalist-desktop-wallpaper-KUhEUW1LLag.jpg"
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center border-2 border-solid border-darkSage border-opacity-80 text-logo">
                  <img src={Logo} alt="logo" />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-logo title-font mt-4 text-logo text-lg">
                    our story.
                  </h2>
                  <div className="w-12 h-1 bg-darkSage rounded mt-2 mb-4"></div>
                  <p className="text-base font-lato text-darkGreen">
                    <span className="font-logo text-logo">gentle.</span> is a
                    lifesstyle brand aimed towards those with a warm, serene,
                    and gentle energy to them.
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-darkSage sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4 text-darkGreen font-lato">
                  while mainly focusing on fashion, houseplants, and crystals,
                  <span className="font-logo text-logo"> gentle.</span> aims to
                  curate a selection of items people of this aesthetic niche
                  would like to have. lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum. pariatur alias
                  eum, placeat at dolores magnam pariatur magni maxime adipisci
                  perspiciatis eveniet.
                </p>
                <Link
                  to="/contact"
                  className="text-darkSage font-lato font-bold inline-flex items-center hover:text-lightSage"
                >
                  contact us
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
