// src/components/ProductSummary.tsx

'use client';

interface ProductSummaryProps {
  title: string;
  ratings?: number;
  ratingsCount?: number;
}

export default function ProductSummary({ title, ratings, ratingsCount }: ProductSummaryProps) {
  return (
    <div className="space-y-2">

      {/* Title */}
      <h1 className="text-3xl font-semibold text-gray-900">{title}</h1>

      {/* Reviews */}
      {ratings !== undefined && ratingsCount !== undefined && (
        <div className="flex items-center space-x-2">
          <div className="flex text-yellow-400 text-xl">
            {'★'.repeat(Math.round(ratings))}
            {'☆'.repeat(9 - Math.round(ratings))}
          </div>
          <span className="text-sm text-gray-600">({ratingsCount})</span>
        </div>
      )}

    </div>
  );
}