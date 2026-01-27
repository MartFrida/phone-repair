import React from 'react'

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative mx-auto max-w-[2000px]">

        {/* Картинка */}
        <img
          src="/images/hero.webp"
          alt="Reparación de móviles premium"
          className="
            w-full
            object-cover
            h-[70vh]
            sm:h-[75vh]
            lg:h-[calc(100vh-var(--header-height))]
            max-h-[900px]
          "
          loading="eager"
        />

        {/* Затемнение + градиент */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />

        {/* Контент */}
        <div className="absolute inset-0 flex items-end sm:items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-0">

            <div
              className="
                max-w-xl
                mx-auto
                sm:mx-0
                sm:ml-auto
                text-center
                sm:text-right
              "
            >
             <h1 className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-neutral-200">
  Reemplazo de cristal de pantalla
</h1>

              <p className="hidden sm:block mt-6 text-neutral-200 text-sm sm:text-base">
  Servicio profesional para iPhone y Samsung.  
  Piezas originales, técnicos certificados y garantía hasta 12 meses.
</p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center sm:justify-end">
                <button className="px-6 py-2 sm:py-3 rounded-xl bg-yellow-400 text-black font-semibold">
                  Reservar ahora
                </button>
                <button className="px-6 py-3 rounded-xl border border-neutral-300 text-neutral-200">
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
