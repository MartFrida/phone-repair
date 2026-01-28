import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export default function ServiceCard({title, slug, description, image}) {
  const navigate = useNavigate ();
  const [isModalOpen, setIsModalOpen] = useState (false);

  const handleSelectModelClick = serviceTitle => {
    const urlName = serviceTitle.toLowerCase ().replace (/\s+/g, '-');
    navigate (`/reparar/${urlName}`);
  };

  const handleOpenModal = () => setIsModalOpen (true);
  const handleCloseModal = () => setIsModalOpen (false);

  // Текст описания сервиса
  const serviceInfo = `
🔧 Cambio de cristal de pantalla móvil
El cambio de cristal de pantalla móvil es la solución ideal cuando el cristal está roto o agrietado, pero la pantalla sigue funcionando correctamente, tanto en imagen como en respuesta táctil.
Este tipo de reparación de cristal de móvil permite sustituir únicamente el vidrio dañado, conservando la pantalla original y ofreciendo una opción más económica que el cambio completo de pantalla.

📌 ¿Cuándo es recomendable el cambio de cristal?
Puedes acudir a nuestro servicio de cambio de cristal de pantalla si:
- el cristal del móvil está roto o agrietado
- el táctil responde correctamente
- la imagen se ve clara, sin manchas ni líneas
- no hay zonas negras ni píxeles muertos
- buscas una reparación rápida y económica

💡 Ventajas del cambio de cristal de móvil
- Ahorro frente al cambio de pantalla completa
- Conservas la pantalla original del dispositivo
- Reparación segura y profesional
- Resultado como nuevo

En SmartFix Móvil & Cristal utilizamos materiales de alta calidad y técnicas especializadas para garantizar un acabado perfecto y duradero.
📱 Reparamos tu móvil como nuevo.

📍 Zonas de servicio:
- Barcelona
- Girona
- Tossa de Mar
- Toda España – recepción de dispositivos por envío

📦 Envíanos tu móvil | 🔧 Lo reparamos | 🚚 Te lo devolvemos como nuevo
`;

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
      {isModalOpen &&
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={handleCloseModal}
        >
          <div className="bg-neutral-900 text-neutral-100 rounded-xl max-w-xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <pre className="whitespace-pre-wrap text-sm">{serviceInfo}</pre>
            <div className="flex justify-end mt-4">
            <button
              onClick={() => handleSelectModelClick (slug)}
               className="px-4 py-2 rounded-lg  bg-yellow-400 text-black text-sm hover:bg-neutral-800 hover:text-white transition"
            >
              Elige tu modelo
            </button>
            </div>
          </div>
        </div>}
    </div>
  );
}
