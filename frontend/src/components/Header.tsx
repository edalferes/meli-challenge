// src/components/Header.tsx

'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#ffe600] shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center px-4 py-2 space-y-2 lg:space-y-0">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0 mr-4">
          <img
            src="/images/logo_ml.png"
            alt="Mercado Livre"
            className="h-12 w-auto"
          />
        </Link>

        {/* Search bar */}
        <div className="flex-grow">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Buscar produtos, marcas e muito mais..."
              className="w-full h-10 px-4 pr-10 rounded border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            {/* Lupa */}
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500">
              🔍
            </div>
          </div>
        </div>

      </div>

      {/* Links */}
      <nav className="bg-[#ffe600]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center px-4 py-1 text-sm text-gray-700 space-x-4">
          <div className="ml-auto flex space-x-4">
            <Link href="#">Crie sua conta</Link>
            <Link href="#">Entre</Link>
            <Link href="#">Compras</Link>
            <Link href="#">
              <span role="img" aria-label="Carrinho">🛒</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}