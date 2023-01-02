import React from 'react';

import Carousel from '../components/Carousel';

import Hero from '../components/Hero';
import Testimonial from '../components/Testimonial';

function HomeScreen() {
  return (
    <>
      <Hero />
      <Carousel />
      <Testimonial />
    </>
  );
}

export default HomeScreen;
