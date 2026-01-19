import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Services from './components/Services';
import ModelCatalog from './components/ModelCatalog';
import MobileCTA from './components/MobileCTA';
import ScrollToTop from './components/ScrollToTop';
import BrandLogos from './components/BrandLogos';

export default function App () {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans">
      <Header />
      <Hero />
      {/* <Services /> */}
      <ModelCatalog />
      <BrandLogos />
      <MobileCTA />
      <Footer />
       <ScrollToTop />
    </div>
  );
}
