import REPAIR_DATA from '../data/models.json';
import { useParams } from 'react-router-dom';

export default function ModelCard({ name, image}) {
    const { servicio, modelo } = useParams();
  const repair = REPAIR_DATA?.[servicio]?.find(item => item.name === name);
  console.log("repair", repair);
  console.log("servicio, modelo", servicio, modelo);


  return (
    <div>
      <article className="group rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden hover:border-yellow-400 transition">
        <div className="h-44 flex items-center justify-center bg-black">
          <img
            src={image}
            alt={`Reparación ${name}`}
            className="h-full object-contain group-hover:scale-105 transition"
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold">{name}</h3>
          {/* Контент: цена, время, кнопки */}
    <div className="flex-1">
      {repair ? (
        <div className="mb-6">
          <p className="text-xl mb-2">
            Precio: <span className="text-yellow-400 font-semibold">{repair.price}€</span>
          </p>
          
        </div>
      ) : (
        <p className="text-neutral-400 mb-6">
          Precio no disponible. Consúltanos sin compromiso.
        </p>
      )}

       <div className="flex flex-col sm:flex-row gap-2">
              <a
                href="https://wa.me/34600000000"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-2 rounded-lg bg-yellow-400 text-black font-medium text-sm hover:opacity-90 transition"
              >
                Reparar
              </a>

              
            </div>
    </div>
        </div>
      </article>
    </div>
  );
}
