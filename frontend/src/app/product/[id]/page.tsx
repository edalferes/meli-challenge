'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchProductById, Product } from '@/lib/api';

import Breadcrumb from '@/components/Breadcrumb';
import ProductGallery from '@/components/ProductGallery';
import ProductSummary from '@/components/ProductSummary';
import PaymentMethods from '@/components/PaymentMethods';
import ProductDescription from '@/components/ProductDescription';
import BuyBox from '@/components/BuyBox';
import ProductNotFound from '@/components/ProductNotFound';

export default function ProductDetailPage() {
  const params = useParams();
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (typeof id === 'string') {
      fetchProductById(id)
        .then(setProduct)
        .catch((err) => {
          console.error('Erro ao buscar produto:', err);
          setProduct(null);
        })
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <p className="p-4">Carregando produto...</p>;
  if (!product) return <ProductNotFound />;

  return (
    <main className="max-w-7xl mx-auto p-4 space-y-6">

      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Main Gris */}
      <div className="bg-white p-6 rounded shadow grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Column 1: Gallery */}
        <div className="md:col-span-1">
          <ProductGallery images={product.images} />
        </div>

        {/* Column 2: Summary + Payment + Description */}
        <div className="md:col-span-1 flex flex-col space-y-6">
          <ProductSummary
            title={product.title}
            ratings={product.rating}
            // random
            ratingsCount={Math.floor(Math.random() * 1000)}
          />

          <PaymentMethods methods={product.payment_methods} />

          <ProductDescription description={product.description} />
        </div>

        {/* Column 3: BuyBox */}
        <div className="md:col-span-1">
        <BuyBox
          price={product.price}
          stock={product.stock}
          sellerName={product.seller.name}
          sellerSales={product.seller.sales}
        />
        </div>

      </div>

    </main>
  );
}