'use client';

import Link from 'next/link';

export default function Breadcrumb() {
  return (
    <div className="text-sm text-blue-600 mb-4">
      <Link href="/" className="hover:underline">
        ← Voltar para a lista de produtos
      </Link>
    </div>
  );
}