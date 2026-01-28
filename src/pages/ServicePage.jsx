import React from 'react';
import {useParams} from 'react-router-dom';
import MODELS_BY_SERVICE from '../data/models.json';
import {logos} from '../data/logos.jsx';
import ModelCard from '../components/ModelCard.jsx';
import ModelSelect from '../components/ModelSelect.jsx';

// Пример данных с изображениями моделей
// const MODELS_BY_SERVICE = {
//   'cambiar-pantalla-por-original': [
//     {
//       name: 'iPhone 11',
//       slug: 'iphone-11',
//       image: '/images/iphone.jpg',
//       brand: 'iPhone',
//       category: 'smartphone',
//       price: 'desde 79€',
//     },
//     {
//       name: 'iPhone 12',
//       slug: 'iphone-12',
//       image: '/images/iphone.jpg',
//       brand: 'iPhone',
//       category: 'smartphone',
//       price: 'desde 79€',
//     },
//     {
//       name: 'iPhone 13',
//       slug: 'iphone-13',
//       image: '/images/iphone.jpg',
//       brand: 'iPhone',
//       category: 'smartphone',
//       price: 'desde 79€',
//     },
//   ],
//   'cambio-bateria': [
//     {
//       name: 'Samsung S22',
//       slug: 'samsung-s22',
//       image: '/images/samsung-s22.webp',
//     },
//     {
//       name: 'Samsung S23',
//       slug: 'samsung-s23',
//       image: '/images/samsung-s23.webp',
//     },
//   ],
// };

// // SEO-контент
// const SEO_CONTENT = {
//   'cambiar-pantalla-por-original': {
//     title: '🔧 Cambio de cristal de pantalla móvil',
//     description:
//       'El cambio de cristal de pantalla móvil es la solución ideal cuando el cristal está roto o agrietado, pero la pantalla sigue funcionando correctamente, tanto en imagen como en respuesta táctil. Este tipo de reparación permite sustituir únicamente el vidrio dañado, conservando la pantalla original y ofreciendo una opción más económica que el cambio completo de pantalla.',
//     whenRecommended: [
//       'el cristal del móvil está roto o agrietado',
//       'el táctil responde correctamente',
//       'la imagen se ve clara, sin manchas ni líneas',
//       'no hay zonas negras ni píxeles muertos',
//       'buscas una reparación rápida y económica',
//     ],
//     advantages: [
//       'Ahorro frente al cambio de pantalla completa',
//       'Conservas la pantalla original del dispositivo',
//       'Reparación segura y profesional',
//       'Resultado como nuevo',
//     ],
//     serviceAreas: [
//       'Barcelona',
//       'Girona',
//       'Tossa de Mar',
//       'Toda España – recepción de dispositivos por envío',
//     ],
//   },
//   'cambio-bateria': {
//     title: '🔋 Cambio de batería móvil',
//     description:
//       'El cambio de batería es la solución perfecta cuando tu móvil se descarga rápidamente o no enciende. Garantiza que tu dispositivo vuelva a funcionar como el primer día, con baterías originales de alta calidad y técnicos certificados.',
//     whenRecommended: [
//       'El móvil se descarga rápidamente',
//       'Apagados inesperados',
//       'No carga correctamente',
//       'Calienta demasiado',
//       'Batería hinchada',
//     ],
//     advantages: [
//       'Mayor duración y rendimiento',
//       'Conserva el dispositivo original',
//       'Reparación rápida y segura',
//       'Garantía hasta 12 meses',
//     ],
//     serviceAreas: [
//       'Barcelona',
//       'Girona',
//       'Tossa de Mar',
//       'Toda España – recepción de dispositivos por envío',
//     ],
//   },
// };

export default function ServicePage () {
  const {servicio} = useParams ();


  const models = MODELS_BY_SERVICE[servicio] || [];
   const iphone = models.filter (m => m.brand === 'iPhone');
  const ipad = models.filter (m => m.brand === 'iPad');
  const applewatches = models.filter (m => m.brand === 'Applewatch');
  const samsung = models.filter (m => m.brand === 'Samsung');
  const appleLogo = logos['apple'];
    const samsungLogo = logos['samsung'];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Заголовок */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 capitalize">
        Reparar {servicio.replace (/-/g, ' ')}
      </h1>

      <p className="text-neutral-400 mb-8">
        Selecciona tu modelo para ver el precio y detalles de la reparación.
      </p>

      {/* Карточки моделей */}
      {/* {models.length === 0
        ? <p className="text-neutral-500">No hay modelos disponibles.</p>
        : <div className="flex overflow-x-auto gap-4 mb-10 scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-900">
            {models.map (model => (
              <button
                key={model.slug}
                onClick={() => navigate (`/reparar/${servicio}/${model.slug}`)}
                className="flex-shrink-0 w-40 sm:w-44 md:w-48 p-4 rounded-xl border border-neutral-800 bg-neutral-900 hover:border-yellow-400 transition flex flex-col items-center text-center"
              >
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain mb-2"
                />
                <span className="font-medium text-sm sm:text-base">
                  {model.name}
                </span>
              </button>
            ))}
          </div>} */}

          {/* Model Catalog */}
           {/* Iphone */}
                  <div className="mb-4 flex items-baseline justify-between ">
                    <div className="flex items-baseline justify-start gap-5 ">
                      <div className="flex items-center justify-start opacity-100 transition">
                        {appleLogo}
                      </div>
                      <h4 className="text-2xl sm:text-4xl font-semibold mb-10">iPhone</h4>
                    </div>
          
                    <ModelSelect models={iphone} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {iphone.map (model => <ModelCard key={model.id} {...model} />)}
                  </div>
          
                  {/* Ipad */}
                   <div className="mt-16 mb-4 flex items-baseline justify-between ">
                    <div className="flex items-baseline justify-start gap-5 ">
                    <div className="flex items-center justify-start opacity-100 transition">
                      {appleLogo}
                    </div>
                    <h4 className="text-2xl sm:text-4xl font-semibold mb-10">iPad</h4>
                    </div>
                    <ModelSelect models={ipad} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ipad.map (model => <ModelCard key={model.id} {...model} />)}
                  </div>
          
                  {/* Applewatch */}
                  <div className="mt-16 mb-4 flex items-baseline justify-between ">
                    <div className="flex items-baseline justify-start gap-5 ">
                    <div className="flex items-center justify-start opacity-100 transition">
                      {appleLogo}
                    </div>
                    <h4 className="text-2xl sm:text-4xl font-semibold mb-10">
                      Apple Watch
                    </h4>
                    </div>
                    <ModelSelect models={applewatches} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {applewatches.map (model => <ModelCard key={model.id} {...model} />)}
                  </div>
          
                  {/* Samsung */}
                  <div className="mt-12  flex items-center justify-between opacity-100 transition">
                    {React.cloneElement (samsungLogo, {
                      className: 'my-0  w-40 fill-gray-200 hover:fill-white transition',
                    })}
                    <ModelSelect models={samsung} />
                  </div>
          
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {samsung.map (model => <ModelCard key={model.id} {...model} />)}
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
