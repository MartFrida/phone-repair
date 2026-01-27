import React, { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <a href="/" className="flex items-center">
          <img
            src="/logo.webp"
            alt="RepairPRO"
            className="h-8 sm:h-9 w-auto"
          />
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6 text-sm text-neutral-300">
          <a href="#modelos" className="hover:text-yellow-400">Modelos</a>
          <a href="#contacto" className="hover:text-yellow-400">Contacto</a>
        </nav>

        {/* BUTTON */}
        <div className="flex items-center gap-3">
          {/* Mobile button */}
          <button className="sm:hidden text-xs px-3 py-2 rounded-lg bg-yellow-400 text-black font-semibold">
            Solicitar
          </button>

          {/* Desktop button */}
          <button className="hidden sm:block text-sm px-4 py-2 rounded-lg bg-yellow-400 text-black font-semibold">
            Solicitar reparación
          </button>

          {/* BURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-neutral-300 focus:outline-none"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black border-t border-neutral-800">
          <nav className="flex flex-col gap-4 p-4 text-sm text-neutral-300">
            <a
              href="#modelos"
              onClick={() => setOpen(false)}
              className="hover:text-yellow-400"
            >
              Modelos
            </a>
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="hover:text-yellow-400"
            >
              Contacto
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
