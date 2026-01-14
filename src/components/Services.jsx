import React from 'react';
import ServiceCard from './ServiceCard.jsx';
import services from '../data/services.json';

export default function Services () {
  return (
    <div>
      <section
        id="servicios"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20"
      >
       <h2 className="text-3xl sm:text-4xl font-semibold mb-12 text-center uppercase tracking-widest">
  Servicios
</h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map (service => (
            <ServiceCard key={service.title} {...service} />
          ))}

        </div>
      </section>
    </div>
  );
}
