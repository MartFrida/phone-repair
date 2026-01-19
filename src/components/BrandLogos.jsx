import React from 'react';
import brandsLogos from '../data/logos.json';
import { logos } from '../data/logos.jsx';

export default function BrandLogos () {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-12 text-center uppercase tracking-widest">
        Marcas que trabajamos
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center">
        {brandsLogos.map(brand => (
  <div
    key={brand.name}
    className="flex items-center justify-center opacity-70 hover:opacity-100 transition"
  >
    {logos[brand.name.toLowerCase()]}
  </div>
))}
      </div>
    </section>
  );
}
