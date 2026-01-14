import React, { useState } from 'react';
import ServiceCard from './ServiceCard.jsx';
import services from '../data/services.json';

export default function Services () {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    <section
      id="servicios"
      className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20"
    >
      <h2 className="text-3xl sm:text-4xl font-semibold mb-12 text-center uppercase tracking-widest">
        Servicios
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleServices.map(service => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>

      {services.length > 3 && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 border border-black text-sm uppercase tracking-widest rounded-xl border border-neutral-700 hover:bg-black hover:text-white transition cursor-pointer"
          >
            {showAll ? 'Ver menos' : 'Ver todos los servicios'}
          </button>
        </div>
      )}
    </section>
  );
}
