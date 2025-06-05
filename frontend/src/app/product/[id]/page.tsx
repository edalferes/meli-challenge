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

      {/* GRID principal */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* Coluna esquerda (gallery + detalhes) */}
        <div className="md:col-span-8 flex space-x-8">

          {/* Imagens */}
          <ProductGallery images={product.images} />

          {/* Detalhes */}
          <div className="flex flex-col space-y-4 flex-1">
            <ProductSummary
              title={product.title}
              ratings={product.seller.rating}
              ratingsCount={150} // exemplo
            />
            <PaymentMethods methods={product.payment_methods} />
            <ProductSpecs stock={product.stock} />
          </div>

        </div>

        {/* Coluna direita (BuyBox) */}
        <div className="md:col-span-4">
          <BuyBox stock={product.stock ?? 0} sellerName={product.seller.name} />
        </div>

      </div>

      {/* Descrição do produto */}
      <ProductDescription description={product.description} />

    </main>
  );
}