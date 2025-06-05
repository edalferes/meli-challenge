// src/components/ProductNotFound.tsx

'use client';

import Link from 'next/link';

export default function ProductNotFound() {
  return (
    <main className="max-w-2xl mx-auto p-8 text-center space-y-4">
      <h1 className="text-3xl font-bold text-gray-800">Produto não encontrado</h1>
      <p className="text-gray-600">
        O produto que você está procurando não existe ou foi removido.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
      >
        Voltar para a Home
      </Link>
    </main>
  );
}