import React from 'react';
import ModelCard from './ModelCard.jsx';
import models from '../data/models.json';

export default function ModelCatalog () {
  const iphone = models.filter (m => m.brand === 'iPhone');
  const ipad = models.filter (m => m.brand === 'iPad');
  const applewatches = models.filter (m => m.brand === 'Applewatch');
  const samsung = models.filter (m => m.brand === 'Samsung');

  return (
    <div>
      <section
        id="modelos"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10 ">Modelos </h2>
        <h3 className="text-2xl sm:text-3xl font-semibold mb-10">logo Apple </h3>
        <h4 className="text-2xl sm:text-3xl font-semibold mb-10">Iphone</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {iphone.map (model => <ModelCard key={model.name} {...model} />)}
        </div>

        <h3 className="text-2xl sm:text-3xl font-semibold mb-10">Ipad </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ipad.map (model => <ModelCard key={model.name} {...model} />)}
        </div>

        <h3 className="text-2xl sm:text-3xl font-semibold mb-10">
          Applewatch{' '}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {applewatches.map (model => (
            <ModelCard key={model.name} {...model} />
          ))}
        </div>
        <h3 className="text-2xl sm:text-3xl font-semibold mb-10"> logo Samsung </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {samsung.map (model => <ModelCard key={model.name} {...model} />)}
        </div>
        <h3 className="text-2xl sm:text-3xl font-semibold mb-10">Otros modelos </h3>
        {/* logos de otras marcas */}
      </section>
    </div>
  );
}
