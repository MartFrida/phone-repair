import React from 'react'

export default function ModelCard({ name, image }) {
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
        {/* <span className="text-xs text-neutral-500">{brand}</span> */}
        <h3 className="font-semibold">{name}</h3>
        <div className="mt-3 flex items-center justify-between">
          {/* <span className="text-yellow-400 font-bold">{price}</span> */}
          <button className="text-sm px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-yellow-400 hover:text-black transition">
            Reparar
          </button>
        </div>
      </div>
    </article>
    </div>
  )
}
