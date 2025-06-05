'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchProducts, Product } from '@/lib/api';

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-4">Carregando produtos...</p>;

  return (
    <main className="bg-[#ebebeb] min-h-screen">


      {/* Product List */}
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="bg-white rounded shadow p-4 hover:shadow-md transition"
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-48 object-contain mb-2"
            />
            <h2 className="text-gray-800 text-lg font-semibold mb-1">{product.title}</h2>
            <p className="text-green-600 text-xl font-bold mb-1">R$ {product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-600">Vendido por {product.seller?.name}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}