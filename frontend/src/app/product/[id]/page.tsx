// src/app/product/[id]/page.tsx

'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
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

      <Breadcrumb />

      {/* Top section: Summary + gallery + buy box */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 rounded shadow">

        {/* Coluna esquerda (titulo + reviews + imagens) */}
        <div className="md:col-span-2 space-y-4">
          <ProductSummary
            title={product.title}
            ratings={product.seller.rating}
            ratingsCount={150} // exemplo de dado
          />
          <ProductGallery images={product.images} />
        </div>

        {/* Coluna direita: BuyBox */}
        <div className="md:col-span-1">
          <BuyBox stock={product.stock ?? 0} sellerName={product.seller.name} />
        </div>

      </div>

      {/* Bottom section: Payment, specs, description */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Conteúdo do produto */}
        <div className="md:col-span-2 space-y-4">
          <PaymentMethods methods={product.payment_methods} />
          <ProductSpecs stock={product.stock} />
          <ProductDescription description={product.description} />
        </div>

      </div>

    </main>
  );
}