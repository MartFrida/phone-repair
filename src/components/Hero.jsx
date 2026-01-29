import React from 'react'

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative mx-auto max-w-[2000px]">

        {/* ===== MOBILE ===== */}
        <div className="relative sm:hidden p-6">
          <img
            src="/images/hero.png"
            alt="Reparación de móviles"
            className="w-full aspect-square object-cover"
            loading="eager"
          />

          {/* затемнение */}
          <div className="absolute inset-0 " />

          {/* контент внизу картинки */}
          <div className="text-center ">
            <h1 className="text-xl font-bold text-white">
              Cambio de cristal
            </h1>

            <p className="mt-2 text-sm text-neutral-200">
              Reparación rápida con garantía
            </p>

            <button className="mt-4 w-full py-3 rounded-xl bg-yellow-400 text-black font-semibold">
              Contactar
            </button>
          </div>
        </div>

        {/* ===== DESKTOP ===== */}
        <div className="relative hidden sm:block">
          <img
            src="/images/hero.webp"
            alt="Reparación de móviles premium"
            className="
              w-full
              object-cover
              h-[75vh]
              lg:h-[calc(100vh-var(--header-height))]
              max-h-[900px]
            "
            loading="eager"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />

          <div className="absolute inset-0 flex items-center">
            <div className="w-full max-w-7xl mx-auto px-6">
              <div className="max-w-xl ml-auto text-right">
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-neutral-200">
                  Reemplazo de cristal de pantalla
                </h1>

                <p className="mt-6 text-neutral-200">
                  Servicio profesional para iPhone y Samsung.  
                  Piezas originales y garantía hasta 12 meses.
                </p>

                <div className="mt-8 flex gap-4 justify-end">
                  <button className="px-6 py-3 rounded-xl bg-yellow-400 text-black font-semibold">
                    Contactar
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
