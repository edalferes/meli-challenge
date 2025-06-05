'use client';

interface ProductSpecsProps {
  stock?: number;
}

export default function ProductSpecs({ stock }: ProductSpecsProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white space-y-2">
      <h2 className="font-semibold text-gray-900 mb-2">Estoque disponível:</h2>
      <p className="text-green-600 font-bold">{stock ?? 0}</p>
    </div>
  );
}