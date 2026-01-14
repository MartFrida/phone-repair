import React from 'react'

export default function Header() {
  return (
    <div>
      <header className="border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg tracking-wide">Repair<span className="text-yellow-400">PRO</span></span>
          <nav className="hidden md:flex gap-6 text-sm text-neutral-400">
            <a href="#modelos" className=" cursor-pointer hover:text-yellow-400">Modelos</a>
            <a href="#servicios" className="cursor-pointer hover:text-yellow-400">Servicios</a>
            <a href="#contacto" className="cursor-pointer hover:text-yellow-400">Contacto</a>
          </nav>
          <button className="text-sm px-4 py-2 rounded-lg bg-yellow-400 text-black font-semibold hidden sm:block cursor-pointer">
            Solicitar reparación
          </button>
        </div>
      </header>
    </div>
  )
}
