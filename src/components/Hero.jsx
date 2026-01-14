import React from 'react'

export default function Hero() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              Reemplazo de cristal de pantalla
            </h1>
            <p className="mt-6 text-neutral-400 max-w-xl text-sm sm:text-base">
              Servicio profesional para iPhone y Samsung. Piezas originales, técnicos certificados y garantía hasta 12 meses.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-yellow-400 text-black font-semibold cursor-pointer">
                Reservar ahora
              </button>
              <button className="w-full sm:w-auto px-6 py-3 rounded-xl border border-neutral-700 cursor-pointer">
                Ver precios
              </button>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-transparent blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
              alt="Reparación de móviles premium"
              className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
