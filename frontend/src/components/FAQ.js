import React from 'react';
import { Link } from 'react-router-dom';

function FAQ() {
  return (
    <div>
      <div>
        <section className="text-gray-700">
          <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-4">
              <h1 className="text-darkSage text-center text-3xl underline decoration-dotted decoration-lightSage font-bold font-lato mb-1">
                f.a.q.
              </h1>
              <p className="text-base leading-relaxed font-lato text-darkGreen xl:w-2/4 lg:w-3/4 mx-auto">
                some frequently asked questions answered here for your
                convenience! if you have any other inquiries, please submit a
                message through our{' '}
                <span className="font-bold text-darkSage">
                  <Link to="/contact">contact form</Link>
                </span>
                !
              </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="w-full lg:w-3/4 px-4 py-2 mx-auto">
                <details className="mb-4">
                  <summary className="font-bold font-lato text-darkGreen bg-lightSage bg-opacity-40 rounded-md py-2 px-4">
                    which countries/regions do you deliver to?
                  </summary>

                  <span className="font-lato text-darkGreen">
                    laboris qui labore cillum culpa in sunt quis sint veniam.
                    dolore ex aute deserunt esse ipsum elit aliqua. aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-bold font-lato text-darkGreen bg-lightSage bg-opacity-40 rounded-md py-2 px-4">
                    where are your items sourced from?
                  </summary>

                  <span className="font-lato text-darkGreen">
                    laboris qui labore cillum culpa in sunt quis sint veniam.
                    dolore ex aute deserunt esse ipsum elit aliqua. aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-bold font-lato text-darkGreen bg-lightSage bg-opacity-40 rounded-md py-2 px-4">
                    how quickly do you process orders?
                  </summary>

                  <span className="font-lato text-darkGreen">
                    laboris qui labore cillum culpa in sunt quis sint veniam.
                    dolore ex aute deserunt esse ipsum elit aliqua. aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FAQ;
