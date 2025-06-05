'use client';

interface ProductDescriptionProps {
  description: string;
}

export default function ProductDescription({ description }: ProductDescriptionProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
      <h2 className="font-semibold text-gray-900 mb-2">Descrição do produto</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}