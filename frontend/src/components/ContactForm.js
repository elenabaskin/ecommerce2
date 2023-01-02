import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function ContactForm() {
  return (
    <div>
      <section className="text-gray-600 body-font relative p-4" id="contact">
        <h1 className="text-darkSage text-center text-3xl underline decoration-dotted decoration-lightSage font-bold font-lato mb-1">
          contact us
        </h1>
        <div className="container px-5 pb-2 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-[url(https://img.freepik.com/free-vector/potted-plant-doodle-vector-background_53876-126321.jpg?w=2000)] bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <img
                  className="aspect-square h-40 object-center"
                  src={logo}
                  alt="logo"
                />
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-darkGreen font-lato tracking-widest text-xs">
                  email
                </h2>
                <p className="text-darkSage font-lato leading-relaxed">
                  contact@shopgentle.com
                </p>
                <h2 className="title-font font-semibold text-darkGreen font-lato tracking-widest text-xs mt-4">
                  phone
                </h2>
                <p className="leading-relaxed font-lato text-darkSage">
                  123-456-7890
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-darkSage text-lg mb-1 font-lato title-font">
              contact form
            </h2>
            <p className="leading-relaxed mb-5 text-xs font-lato text-darkGreen">
              please consult our{' '}
              <span className="font-bold text-darkSage">
                <Link to="/about">faq section</Link>
              </span>{' '}
              on our about us page before submitting a form. we read all of the
              messages sent our way! please give us 3 business days to respond
              to any inquiries or concerns. thanks!
            </p>
            <div className="relative mb-4">
              <label
                for="name"
                className="leading-7 text-sm text-darkGreen font-lato"
              >
                name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-lightGrey focus:border-lightSage focus:ring-2 focus:ring-regGrey text-base outline-none text-darkGreen py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-lato"
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                for="email"
                className="leading-7 text-sm font-lato text-darkGreen"
              >
                email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-lightGrey focus:border-lightSage focus:ring-2 focus:ring-regGrey text-base outline-none text-darkGreen py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-lato"
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                for="message"
                className="leading-7 text-sm text-darkGreen font-lato"
              >
                message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-lightGrey focus:border-lightSage focus:ring-2 focus:ring-lightSage h-32 text-base outline-none text-darkGreen py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out font-lato"
                required
              ></textarea>
            </div>
            <button className="text-darkGreen bg-lightSage border-0 py-2 px-6 focus:outline-none hover:bg-darkSage rounded text-lg">
              submit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;
