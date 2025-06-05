// src/components/ProductNotFound.tsx

'use client';

import Link from 'next/link';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function ProductNotFound() {
  return (
    <main className="max-w-3xl mx-auto p-8 bg-white rounded shadow text-center space-y-6 mt-12">

      {/* Ícone */}
      <div className="flex justify-center">
        <ExclamationTriangleIcon className="h-16 w-16 text-yellow-400" />
      </div>

      {/* Título */}
      <h1 className="text-2xl font-bold text-gray-800">
        Ops! Não encontramos o produto
      </h1>

      {/* Texto */}
      <p className="text-gray-600 text-base">
        O produto que você está procurando não está disponível no momento.<br />
        Verifique o link ou explore outras ofertas em nossa loja.
      </p>

      {/* Botão voltar */}
      <Link
        href="/"
        className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
      >
        Voltar para a página inicial
      </Link>

    </main>
  );
}