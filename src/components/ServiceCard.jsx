import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import serviceInfo from '../data/serviceInfo.json';

export default function ServiceCard({title, slug, description, image}) {
  const navigate = useNavigate ();
  const [isModalOpen, setIsModalOpen] = useState (false);

  const handleSelectModelClick = serviceTitle => {
    const urlName = serviceTitle.toLowerCase ().replace (/\s+/g, '-');
    navigate (`/reparar/${urlName}`);
  };

  const handleOpenModal = () => setIsModalOpen (true);
  const handleCloseModal = () => setIsModalOpen (false);
 
  const currentService = serviceInfo[slug];

  return (
    <div>
      <article className="group rounded-2xl bg-neutral-900 border border-neutral-800 p-5 sm:p-6 hover:border-yellow-400 transition">
        <div className="h-44 flex items-center justify-center bg-black">
          <img
            src={image}
            alt={`Reparación ${slug}`}
            className="h-full object-contain group-hover:scale-105 transition"
            loading="lazy"
          />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-neutral-400 text-sm mb-6">{description}</p>
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={() => handleSelectModelClick (slug)}
            className="px-4 py-2 rounded-lg bg-neutral-800 text-sm hover:bg-yellow-400 hover:text-black transition"
          >
            Elige tu modelo
          </button>
          <button
            onClick={handleOpenModal}
            className="px-4 py-2 rounded-lg bg-neutral-800 text-sm hover:bg-yellow-400 hover:text-black transition"
          >
            Conocer más
          </button>
        </div>
      </article>

      {/* Модальное окно */}
      {isModalOpen && currentService && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
    onClick={handleCloseModal}
  >
    <div
      className="bg-neutral-900 text-neutral-100 rounded-xl max-w-xl w-full p-6 relative overflow-y-auto max-h-[90vh]"
      onClick={e => e.stopPropagation()}
    >
      <button
        onClick={handleCloseModal}
        className="absolute top-4 right-4 text-neutral-400 hover:text-white"
      >
        ✕
      </button>

      <div className="prose prose-invert max-w-none text-neutral-400">
        <h2 className="text-xl sm:text-2xl font-bold mb-3">
          {currentService.title}
        </h2>

        <p className="mb-4">{currentService.description}</p>

        <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">
          📌 ¿Cuándo es recomendable?
        </h3>
        <ul className="list-disc list-inside mb-4">
          {currentService.whenRecommended.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">
          💡 Ventajas
        </h3>
        <ul className="list-disc list-inside mb-4">
          {currentService.advantages.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-2">
          📍 Zonas de servicio
        </h3>
        <ul className="list-disc list-inside mb-4">
          {currentService.serviceAreas.map((area, i) => (
            <li key={i}>{area}</li>
          ))}
        </ul>
        <div className="flex justify-end mt-4"> <button onClick={() => handleSelectModelClick (slug)} className="px-4 py-2 rounded-lg bg-yellow-400 text-black text-sm hover:bg-neutral-800 hover:text-white transition" > Elige tu modelo </button> </div>

        <p className="mt-6 font-medium">
          📦 Envíanos tu móvil | 🔧 Lo reparamos | 🚚 Te lo devolvemos como nuevo
        </p>
      </div>
    </div>
  </div>
)}
         
    </div>
  );
}
