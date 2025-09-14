import React, { useState } from "react";

type NavLink = { label: string; href: string; external?: boolean };

const links: NavLink[] = [
  { label: "Início", href: "/" },
  { label: "Projetos", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contact" },
];

 function NavbarHorizontal() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <a href="/" className="text-xl font-semibold">
            NavBarHorizintal
          </a>
          <nav className="hidden md:flex gap-2 items-center" aria-label="Main navigation">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 rounded-md text-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a className="text-sm px-3 py-2 rounded-md border" href="/login">
            Entrar
          </a>
          <a className="text-sm px-3 py-2 rounded-md bg-indigo-600 text-white" href="/signup">
            Registar
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Abrir menu"
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={() => setOpen((s) => !s)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 space-y-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block px-3 py-2 rounded-md text-base hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-2 border-t mt-2 flex gap-2">
              <a className="flex-1 text-center py-2 rounded-md border" href="/login">
                Entrar
              </a>
              <a className="flex-1 text-center py-2 rounded-md bg-indigo-600 text-white" href="/signup">
                Registar
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavbarHorizontal;

