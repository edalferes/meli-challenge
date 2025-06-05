import { Product } from '@/lib/api';
import PaymentMethods from './PaymentMethods';

interface ProductSummaryProps {
  product: Product;
}

export default function ProductSummary({ product }: ProductSummaryProps) {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>
      <p className="text-3xl text-[#3483fa] font-semibold">R$ {product.price.toFixed(2)}</p>
      <PaymentMethods methods={product.payment_methods} />
      <button className="w-full bg-[#3483fa] text-white py-3 rounded hover:bg-[#2968c8]">
        Comprar agora
      </button>
      <div className="text-sm text-gray-700 border-t pt-4">
        <p>Vendedor: <span className="font-medium">{product.seller?.name}</span></p>
        <p>Rating: {product.seller?.rating} / 5</p>
        <p>Estoque: {product.stock} unidades</p>
      </div>
    </div>
  );
}