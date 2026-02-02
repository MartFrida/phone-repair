import React from 'react';
import Hero from '../components/Hero.jsx';
import Services from '../components/Services.jsx';
// import ModelCatalog from '../components/ModelCatalog.jsx';
import BrandLogos from '../components/BrandLogos.jsx';
// import MobileCTA from '../components/MobileCTA.jsx';

function HomePage () {
  return (
    <div>
      <Hero />
      <Services />
      {/* <ModelCatalog /> */}
      <BrandLogos />
      {/* <MobileCTA /> */}
    </div>
  );
}

export default HomePage;
