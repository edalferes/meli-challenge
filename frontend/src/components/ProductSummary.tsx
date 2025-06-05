'use client';

interface ProductSummaryProps {
  title: string;
  ratings: number;
  ratingsCount: number;
}

export default function ProductSummary({ title, ratings, ratingsCount }: ProductSummaryProps) {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      <div className="flex items-center space-x-2 text-yellow-500">
        {'★'.repeat(Math.floor(ratings))}{'☆'.repeat(8 - Math.floor(ratings))}
        <span className="text-sm text-gray-600">({ratingsCount})</span>
      </div>
    </div>
  );
}