import React from 'react';
import Header from '../components/Header';
import Services from '../components/Services';
import Destinations from '../components/Destinations';
import EasySteps from '../components/EasySteps';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
function Home() {
  return (
    <>
      <Header />
      <Services />
      <Destinations />
      <EasySteps />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
