import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <>
      <section
        id="home"
        className="relative bg-[url(https://static.vecteezy.com/system/resources/previews/006/941/907/non_2x/continuous-single-line-book-and-plant-on-the-table-drawing-line-art-drawing-with-abstract-shape-plant-art-design-for-print-cover-wallpaper-vector.jpg)] bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-white/90 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25 lg:bg-white/75"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-lato text-darkGreen font-extrabold sm:text-5xl">
              welcome to
              <strong className="block font-extrabold font-logo text-darkSage">
                gentle.
              </strong>
            </h1>

            <p className="mt-4 max-w-lg font-lato text-darkGreen sm:text-xl sm:leading-relaxed">
              a lifestyle brand for the gentlest of people. new products coming
              soon.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                to="/products"
                className="block w-full rounded bg-darkSage px-12 py-3 text-sm font-lato text-offWhite shadow hover:bg-lightSage focus:outline-none focus:ring ring-lightBrown active:bg-regGrey sm:w-auto"
              >
                shop now
              </Link>

              <Link
                to="/about"
                className="block w-full rounded bg-offWhite px-12 py-3 text-sm font-lato text-darkSage shadow hover:text-lightSage focus:outline-none focus:ring ring-lightBrown active:text-regGrey sm:w-auto"
              >
                our story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
