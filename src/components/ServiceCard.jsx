import React from 'react';

export default function ServiceCard({title, description, image}) {
  return (
    <div>
      <article className="group rounded-2xl bg-neutral-900 border border-neutral-800 p-5 sm:p-6 hover:border-yellow-400 transition">
        <div className="h-44 flex items-center justify-center bg-black">
          <img
            src={image}
            alt={`Reparación ${name}`}
            className="h-full object-contain group-hover:scale-105 transition"
            loading="lazy"
          /></div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
          <p className="text-neutral-400 text-sm mb-6">{description}</p>
          <div className="flex items-center justify-between">
            {/* <span className="text-xl sm:text-2xl font-bold text-yellow-400">{price}</span> */}
            <button className="px-4 py-2 rounded-lg bg-neutral-800 text-sm hover:bg-yellow-400 hover:text-black transition">
              Elige tu modelo
            </button>
          
        </div>

      </article>
    </div>
  );
}
