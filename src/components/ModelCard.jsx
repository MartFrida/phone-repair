import REPAIR_DATA from '../data/models.json';
import { useParams } from 'react-router-dom';
import WhatsappButton from './WhatsappButton.jsx';

export default function ModelCard({  id, name, image,  isActive }) {
    const { servicio } = useParams();
  const repair = REPAIR_DATA?.[servicio]?.find(item => item.name === name);
 
  return (
    <div>
      <article id={`model-${id}`} className={`group rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden hover:border-yellow-400 transition ${isActive ? 'ring-2 ring-yellow-400 scale-[1.02] shadow-xl' : ''}
      `}>
        <div  className="h-44 py-1 flex items-center justify-center bg-black transition-all duration-300
      ">
                  <img
            src={image}
            alt={`Reparación ${name}`}
            className="h-full object-contain group-hover:scale-105 transition"
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold">{name}</h3>

          {/* Контент: цена и кнопка */}
          <div className="flex items-center justify-between mb-6 relative ">
            {repair ? (
              <p className="text-xl">
                Precio: <span className="text-yellow-400 font-semibold">{repair.price}€</span>
              </p>
            ) : (
              <p className="text-neutral-400">
                Precio no disponible. Consúltanos sin compromiso.
              </p>
            )}

            {/* Кнопка справа */}
            <div className="absolute right-0 -bottom-6">
              <WhatsappButton>
              Reparar
            </WhatsappButton>
            </div>
            
          </div>
        </div>
      </article>
    </div>
  );
}
