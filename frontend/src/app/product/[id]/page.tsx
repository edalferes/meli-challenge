'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { fetchProductById, Product } from '@/lib/api';

import Breadcrumb from '@/components/Breadcrumb';
import ProductGallery from '@/components/ProductGallery';
import ProductSummary from '@/components/ProductSummary';
import PaymentMethods from '@/components/PaymentMethods';
import ProductSpecs from '@/components/ProductSpecs';
import BuyBox from '@/components/BuyBox';
import ProductDescription from '@/components/ProductDescription';

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
    <main className="max-w-7xl mx-auto p-4 space-y-6">

      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Grid principal estilo ML */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-white p-6 rounded shadow">

        {/* Coluna 1: Galeria */}
        <div className="md:col-span-5">
          <ProductGallery images={product.images} />
        </div>

        {/* Coluna 2: Detalhes + Métodos + Specs */}
        <div className="md:col-span-5 space-y-4">

          <ProductSummary
            title={product.title}
            ratings={product.seller.rating}
            ratingsCount={150} // ainda mockado
          />

          <PaymentMethods methods={product.payment_methods} />

          <ProductSpecs specs={{
            'Estoque disponível': product.stock?.toString() ?? '0',
            // aqui você pode adicionar mais specs se quiser
          }} />

        </div>

        {/* Coluna 3: BuyBox lateral */}
        <div className="md:col-span-2">
          <BuyBox stock={product.stock ?? 0} sellerName={product.seller.name} />
        </div>

      </div>

      {/* Descrição (abaixo da grid) */}
      <ProductDescription description={product.description} />

    </main>
  );
}