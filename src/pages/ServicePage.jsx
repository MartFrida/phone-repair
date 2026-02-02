import React from 'react';
import {useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import MODELS_BY_SERVICE from '../data/models.json';
import {logos} from '../data/logos.jsx';
import ModelCard from '../components/ModelCard.jsx';
import ModelSelect from '../components/ModelSelect.jsx';

export default function ServicePage () {
  // eslint-disable-next-line no-unused-vars
  const [activeModelId, setActiveModelId] = useState (null);
  const {servicio} = useParams ();

   useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant', // или 'smooth'
    });
  }, [servicio]);
  
  const models = MODELS_BY_SERVICE[servicio] || [];
  const iphone = models.filter (m => m.brand === 'iPhone');
  const ipad = models.filter (m => m.brand === 'iPad');
  const applewatches = models.filter (m => m.brand === 'Applewatch');
  const samsung = models.filter (m => m.brand === 'Samsung');
  const appleLogo = logos['apple'];
  const samsungLogo = logos['samsung'];

  const handleSelectModel = modelId => {
    setActiveModelId (modelId);

    const el = document.getElementById (`model-${modelId}`);
    if (el) {
      el.scrollIntoView ({
        behavior: 'smooth',
        block: 'center',
      });
    }

    // убрать подсветку через 2 сек
    setTimeout (() => setActiveModelId (null), 2000);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Заголовок */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 capitalize">
        Reparar: {servicio.replace (/-/g, ' ')}
      </h1>

      <p className="text-neutral-400 mb-8">
        Selecciona tu modelo para ver el precio y detalles de la reparación.
      </p>

      {/* Select model - Model Catalog */}
      {/* Iphone */}
      <div className="mb-4 flex items-baseline justify-between gap-2">
        <div className="flex items-baseline justify-start gap-5 ">
          <div className="flex items-center justify-start opacity-100 transition">
            {appleLogo}
          </div>
          <h4 className="text-2xl sm:text-4xl font-semibold mb-10">iPhone</h4>
        </div>

        <ModelSelect models={iphone} onSelect={handleSelectModel} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {iphone.map (model => (
          <ModelCard
            key={model.id}
            {...model}
            isActive={activeModelId === model.id}
          />
        ))}
      </div>

      {/* Ipad */}
      <div className="mt-16 mb-4 flex items-baseline justify-between gap-2">
        <div className="flex items-baseline justify-start gap-5 ">
          <div className="flex items-center justify-start opacity-100 transition">
            {appleLogo}
          </div>
          <h4 className="text-2xl sm:text-4xl font-semibold mb-10">iPad</h4>
        </div>
        <ModelSelect models={ipad} onSelect={handleSelectModel} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ipad.map (model => <ModelCard key={model.id} {...model} isActive={activeModelId === model.id}/>)}
      </div>

      {/* Applewatch */}
      <div className="mt-16 mb-4 flex items-baseline justify-between gap-2">
        <div className="flex items-baseline justify-start gap-5 ">
          <div className="flex items-center justify-start opacity-100 transition">
            {appleLogo}
          </div>
          <h4 className="text-2xl sm:text-4xl font-semibold mb-10">
            Apple Watch
          </h4>
        </div>
        <ModelSelect models={applewatches} onSelect={handleSelectModel} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {applewatches.map (model => <ModelCard key={model.id} {...model} isActive={activeModelId === model.id}/>)}
      </div>

      {/* Samsung */}
      <div className="mt-12  flex items-center justify-between opacity-100 transition gap-2">
        {React.cloneElement (samsungLogo, {
          className: 'my-0  w-40 fill-gray-200 hover:fill-white transition',
        })}
        <ModelSelect models={samsung} onSelect={handleSelectModel} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {samsung.map (model => <ModelCard key={model.id} {...model} isActive={activeModelId === model.id}/>)}
      </div>

      {/* SEO-блок */}
      {/* {seo && (
        <div className="prose prose-invert max-w-none text-neutral-400">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">{seo.title}</h2>
          <p className="mb-4">{seo.description}</p>

          <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">📌 ¿Cuándo es recomendable?</h3>
          <ul className="list-disc list-inside mb-4">
            {seo.whenRecommended.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">💡 Ventajas</h3>
          <ul className="list-disc list-inside mb-4">
            {seo.advantages.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">📍 Zonas de servicio</h3>
          <ul className="list-disc list-inside mb-4">
            {seo.serviceAreas.map((area, i) => (
              <li key={i}>{area}</li>
            ))}
          </ul>

          <p className="mt-6 font-medium">
            📦 Envíanos tu móvil | 🔧 Lo reparamos | 🚚 Te lo devolvemos como nuevo
          </p>
        </div>
      )} */}
    </section>
  );
}
