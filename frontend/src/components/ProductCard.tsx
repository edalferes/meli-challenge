'use client';

import Link from 'next/link';
import { Product } from '@/lib/api';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded shadow p-4 hover:shadow-lg transition">
      <Link href={`/product/${product.id}`}>
        <img
          src={product.images?.[0] || '/placeholder.png'}
          alt={product.title}
          className="w-full h-48 object-contain mb-4"
        />
        <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-600">
          {product.title}
        </h2>
        <p className="text-xl text-blue-600 mt-2">R$ {product.price.toFixed(2)}</p>
        {product.stock > 0 && (
          <p className="text-green-600 text-sm mt-1">Estoque disponível: {product.stock}</p>
        )}
      </Link>
    </div>
  );
}