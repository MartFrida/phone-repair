import React from 'react'

export default function Header() {
  return (
    <header className="border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <a href="/" className="flex items-center">
          <img
            src="/logo.webp"
            alt="RepairPRO"
            className="h-8 sm:h-9 w-auto"
          />
        </a>

        <nav className="hidden md:flex gap-6 text-sm text-neutral-300">
          <a href="#modelos" className="hover:text-yellow-400">Modelos</a>
          <a href="#contacto" className="hover:text-yellow-400">Contacto</a>
        </nav>

        <button className="hidden sm:block text-sm px-4 py-2 rounded-lg bg-yellow-400 text-black font-semibold">
          Solicitar reparación
        </button>

      </div>
    </header>
  )
}
