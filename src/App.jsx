import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Services from './components/Services';
import ModelCatalog from './components/ModelCatalog';
import MobileCTA from './components/MobileCTA';
import ScrollToTop from './components/ScrollToTop';
import BrandLogos from './components/BrandLogos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RepairPage from './pages/RepairPage'; 

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans">
        <Header />
               <Routes>
          <Route path="/" element={
            <>
               <Hero />
              <ModelCatalog />
              {/* <Services /> */}
              <BrandLogos />
              <MobileCTA />
            </>
          } />
          <Route path="/reparar/:modelName" element={<RepairPage />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

