'use client';

import { Product } from '@/lib/api';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded shadow bg-white p-4 flex flex-col space-y-2 hover:ring-2 hover:ring-blue-500">
      {product.images.length > 0 && (
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-48 object-contain"
        />
      )}
      <h2 className="text-lg font-semibold text-gray-900">{product.title}</h2>
      <p className="text-green-600 font-bold text-xl">R$ {product.price.toFixed(2)}</p>
      <p className="text-sm text-gray-700">Vendido por {product.seller.name}</p>
      <Link
        href={`/product/${product.id}`}
        className="mt-auto bg-blue-500 text-white text-center py-2 rounded font-semibold hover:bg-blue-600"
      >
        Ver detalhes
      </Link>
    </div>
  );
}