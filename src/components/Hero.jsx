import React from 'react'

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative mx-auto max-w-[2000px]">

        {/* Картинка */}
        <img
          src="/images/hero.webp"
          alt="Reparación de móviles premium"
          className="w-full max-h-150 object-cover"
          loading="eager"
        />

        {/* Затемнение */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Контент поверх */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
            <div className="ml-auto mr-16 max-w-xl text-right">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight  text-neutral-200">
                Reemplazo de cristal de pantalla
              </h1>

              <p className="mt-6 text-neutral-200 text-sm sm:text-base">
                Servicio profesional para iPhone y Samsung.  
                Piezas originales, técnicos certificados y garantía hasta 12 meses.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">
                <button className="px-6 py-3 rounded-xl bg-yellow-400 text-black font-semibold">
                  Reservar ahora
                </button>
                <button className="px-6 py-3 rounded-xl border border-neutral-300">
                  Ver precios
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
