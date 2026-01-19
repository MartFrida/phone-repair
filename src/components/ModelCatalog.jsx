import React from 'react';
import ModelCard from './ModelCard.jsx';
import models from '../data/models.json';
import {logos} from '../data/logos.jsx';

export default function ModelCatalog () {
  const iphone = models.filter (m => m.brand === 'iPhone');
  const ipad = models.filter (m => m.brand === 'iPad');
  const applewatches = models.filter (m => m.brand === 'Applewatch');
  const samsung = models.filter (m => m.brand === 'Samsung');
  const appleLogo = logos['apple'];
  const samsungLogo = logos['samsung'];

  return (
    <div>
      <section
        id="modelos"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold mb-12 text-center uppercase tracking-widest">
          Modelos{' '}
        </h2>

        {/* Iphone */}
        <div className="mb-4 flex items-baseline justify-start gap-5 ">
          <div className="flex items-center justify-start opacity-100 transition">
            {appleLogo}
          </div>
          <h4 className="text-2xl sm:text-4xl font-semibold mb-10">Iphone</h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {iphone.map (model => <ModelCard key={model.id} {...model} />)}
        </div>

        {/* Ipad */}
        <div className="mt-16 mb-4 flex items-baseline justify-start gap-5 ">
          <div className="flex items-center justify-start opacity-100 transition">
            {appleLogo}
          </div>
          <h4 className="text-2xl sm:text-4xl font-semibold mb-10">Ipad</h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {iphone.map (model => <ModelCard key={model.id} {...model} />)}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ipad.map (model => <ModelCard key={model.id} {...model} />)}
        </div>

        {/* Applewatch */}
        <div className="mt-16 mb-4 flex items-baseline justify-start gap-5 ">
          <div className="flex items-center justify-start opacity-100 transition">
            {appleLogo}
          </div>
          <h4 className="text-2xl sm:text-4xl font-semibold mb-10">
            Applewatch
          </h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {iphone.map (model => <ModelCard key={model.id} {...model} />)}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {applewatches.map (model => <ModelCard key={model.id} {...model} />)}
        </div>

        {/* Samsung */}
        <div className="mt-12  flex items-center justify-start opacity-100 transition">
          {React.cloneElement (samsungLogo, {
            className: 'my-0  w-40 fill-gray-200 hover:fill-white transition',
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {samsung.map (model => <ModelCard key={model.id} {...model} />)}
        </div>
        {/* <h3 className="text-2xl sm:text-3xl font-semibold mb-10">
          Otros modelos{' '}
        </h3> */}
        {/* logos de otras marcas */}
      </section>
    </div>
  );
}
