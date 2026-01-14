import React from 'react'
import ServiceCard from './ServiceCard.jsx'

export default function Services() {
  return (
    <div>
       <section id="servicios" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10">Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard title="Cambiar cristal de pantalla" price="desde 49€" desc="Pantallas OLED y AMOLED de alta calidad" />
          <ServiceCard title="Cambiar pantalla por original" price="desde 29€" desc="Recupera la autonomía original de tu móvil" />
           <ServiceCard title="Cambiar pantalla por copia" price="desde 29€" desc="Recupera la autonomía original de tu móvil" />
          <ServiceCard title="Cambiar cristal trasero" price="desde 59€" desc="Limpieza y reparación profesional" />
          <ServiceCard title="Cambiar bateria" price="desde 59€" desc="Limpieza y reparación profesional" />
          <ServiceCard title="Cambiar chasis completo" price="desde 59€" desc="Limpieza y reparación profesional" />
          <ServiceCard title="Cambiar cristal de camara trasera" price="desde 59€" desc="Limpieza y reparación profesional" />
          <ServiceCard title="Reparar placa base" price="desde 59€" desc="Limpieza y reparación profesional" />
          <ServiceCard title="Cambiar flex de carga" price="desde 59€" desc="Limpieza y reparación profesional" />
          <ServiceCard title="Otros reparaciones" price="desde 59€" desc="Limpieza y reparación profesional" />
        </div>
      </section>
    </div>
  )
}
