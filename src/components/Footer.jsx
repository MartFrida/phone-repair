import React from 'react'

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="mt-20 border-t border-neutral-800/60"
    >
      <div className="
        max-w-7xl mx-auto
        px-4 sm:px-6
        py-8
        flex flex-col gap-4
        sm:flex-row sm:items-center sm:justify-between
        text-sm text-neutral-500
      ">
        {/* Contacto y copyright */}
        <div className="flex flex-col gap-1 text-center sm:text-left">
        <span className="opacity-80">
            info@repairpro.es · +34 600 000 000
          </span>
          <span>© 2026 RepairPRO · Reparación de móviles en España</span>
          
        </div>

        {/* Dessaroyador */}
        <a
          href="https://your-link-here.com"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            text-neutral-500
            transition
            hover:text-neutral-300
            text-center sm:text-right
          "
        >
          <span className="opacity-60 group-hover:opacity-100">
            Marie Frida
          </span>
          <span className="ml-2 opacity-40 group-hover:opacity-70">
            · Digital craft
          </span>
        </a>
      </div>
    </footer>
  )
}
