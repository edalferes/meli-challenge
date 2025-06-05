import { Product } from '@/lib/api';

interface ProductSpecsProps {
  product: Product;
}

export default function ProductSpecs({ product }: ProductSpecsProps) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Características do produto</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>ID do produto: {product.id}</li>
        <li>Preço: R$ {product.price.toFixed(2)}</li>
        <li>Estoque disponível: {product.stock}</li>
        <li>Vendedor: {product.seller?.name}</li>
        <li>Rating: {product.seller?.rating} / 5</li>
      </ul>
    </div>
  );
}