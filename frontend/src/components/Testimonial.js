import React from 'react';
import t1 from '../assets/t1.jpg';
import t2 from '../assets/t2.jpg';
import t3 from '../assets/t3.jpg';

function Testimonial() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto pb-10">
          <h1 className="text-darkSage text-center text-3xl underline decoration-dotted decoration-lightSage font-bold font-lato mb-1">
            reviews
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="bg-transparent border-none p-0 h-full text-center lg:bg-offWhite lg:bg-opacity-50 lg:border-solid lg:border-2 lg:border-darkSage lg:border-opacity-80 lg:p-2">
                <img
                  alt="kim taehyung"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-lightSage bg-regGrey"
                  src={t1}
                />
                <p className="leading-relaxed font-lato text-darkGreen">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  dicta minus molestiae vel beatae natus eveniet ratione
                  temporibus aperiam harum alias officiis assumenda officia
                  quibusdam deleniti eos cupiditate dolore doloribus!
                </p>
                <span className="inline-block h-1 w-10 rounded bg-darkSage mt-6 mb-4"></span>
                <h2 className="text-darkGreen font-lato title-font tracking-wider text-sm">
                  vincent k. | @thv
                </h2>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="bg-transparent border-none p-0 h-full text-center lg:bg-offWhite lg:bg-opacity-50 lg:border-solid lg:border-2 lg:border-darkSage lg:border-opacity-80 lg:p-2">
                <img
                  alt="leah wei"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-lightSage bg-regGrey"
                  src={t2}
                />
                <p className="leading-relaxed font-lato text-darkGreen">
                  Ad dolore dignissimos asperiores dicta facere optio quod
                  commodi nam tempore recusandae. Rerum sed nulla eum vero
                  expedita ex delectus voluptates rem at neque quos facere sequi
                  unde optio aliquam!
                </p>
                <span className="inline-block h-1 w-10 rounded bg-darkSage mt-6 mb-4"></span>
                <h2 className="text-darkGreen font-lato title-font tracking-wider text-sm">
                  leah w. | @leahsfieldnotes
                </h2>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="bg-transparent border-none p-0 h-full text-center lg:bg-offWhite lg:bg-opacity-50 lg:border-solid lg:border-2 lg:border-darkSage lg:border-opacity-80 lg:p-2">
                <img
                  alt="dustin vuong"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-lightSage bg-regGrey"
                  src={t3}
                />
                <p className="leading-relaxed text-darkGreen font-lato">
                  Tenetur quod quidem in voluptatem corporis dolorum dicta sit
                  pariatur porro quaerat autem ipsam odit quam beatae tempora
                  quibusdam illum! Modi velit odio nam nulla unde amet odit
                  pariatur at!
                </p>
                <span className="inline-block h-1 w-10 rounded bg-darkSage mt-6 mb-4"></span>
                <h2 className="text-darkGreen font-lato title-font tracking-wider text-sm">
                  dustin v. | @vuongdustin
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
