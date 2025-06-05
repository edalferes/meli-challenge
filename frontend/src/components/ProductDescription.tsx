// src/components/ProductDescription.tsx

'use client';

interface ProductDescriptionProps {
  description: string;
}

export default function ProductDescription({ description }: ProductDescriptionProps) {
  return (
    <div className="bg-white p-6 rounded shadow">

      <h2 className="text-xl font-semibold mb-2 text-gray-900">Descrição do produto</h2>

      <p className="text-gray-800">{description}</p>

    </div>
  );
}