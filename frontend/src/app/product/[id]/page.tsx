// src/app/product/[id]/page.tsx

'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchProductById, Product } from '@/lib/api';
import Link from 'next/link';

export default function ProductDetailPage() {
  const params = useParams();
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (typeof id === 'string') {
      fetchProductById(id)
        .then(setProduct)
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <p className="p-4">Carregando produto...</p>;
  if (!product) return <p className="p-4 text-red-600">Produto não encontrado.</p>;

  return (
    <main className="max-w-7xl mx-auto p-4 bg-[#f5f5f5] min-h-screen">
      {/* Breadcrumb */}
      <Link href="/" className="text-blue-600 text-sm mb-2 inline-block">
        &larr; Voltar para a lista de produtos
      </Link>

      <div className="grid grid-cols-12 gap-6 bg-white p-6 rounded shadow">
        
        {/* Thumbnails */}
        <div className="col-span-2 space-y-2">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={product.title}
              className="w-full rounded border cursor-pointer hover:ring-2 hover:ring-blue-500"
            />
          ))}
        </div>

        {/* Main Info */}
        <div className="col-span-7 space-y-4">
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <p className="text-sm text-gray-600">Vendido por <strong>{product.seller?.name}</strong> &bull; ⭐ {product.seller?.rating}</p>
          <p className="text-3xl text-green-600 font-bold">
            R$ {product.price.toFixed(2)}
          </p>

          {/* Payment Methods */}
          <div>
            <h3 className="font-semibold mb-1">Métodos de pagamento:</h3>
            <ul className="list-disc list-inside text-sm">
              {product.payment_methods.map((method, index) => (
                <li key={index}>{method}</li>
              ))}
            </ul>
          </div>

          {/* Stock */}
          <p className="text-green-600 mt-2">Estoque disponível: {product.stock}</p>

          {/* Buttons */}
          <button className="w-full bg-blue-500 text-white py-3 rounded font-semibold hover:bg-blue-600 mt-4">
            Comprar agora
          </button>
          <button className="w-full bg-gray-100 text-gray-800 py-3 rounded font-semibold hover:bg-gray-200">
            Adicionar ao carrinho
          </button>
        </div>

        {/* Sidebar */}
        <div className="col-span-3 space-y-4 sticky top-20 self-start">
          <div className="border p-4 rounded shadow space-y-2">
            <p className="text-green-600 font-semibold">Chegará grátis amanhã</p>
            <p className="text-sm text-gray-600">Outras formas de entrega</p>
            <p className="mt-2">Estoque: {product.stock}</p>
            <p className="mt-2">Quantidade: 1 unidade</p>
            <button className="w-full bg-blue-500 text-white py-2 rounded font-semibold hover:bg-blue-600 mt-4">
              Comprar agora
            </button>
            <button className="w-full bg-gray-100 text-gray-800 py-2 rounded font-semibold hover:bg-gray-200">
              Adicionar ao carrinho
            </button>
          </div>
        </div>

      </div>

      {/* Description */}
      <div className="bg-white p-6 rounded shadow mt-6">
        <h2 className="text-lg font-semibold mb-2">Descrição do produto</h2>
        <p className="text-gray-700">{product.description}</p>
      </div>
    </main>
  );
}