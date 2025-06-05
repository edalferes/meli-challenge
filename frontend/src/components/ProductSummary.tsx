'use client';

interface ProductSummaryProps {
  title: string;
  ratings: number;
  ratingsCount: number;
}

export default function ProductSummary({ title, ratings, ratingsCount }: ProductSummaryProps) {
  const fullStars = Math.round(ratings);

  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>

      <div className="flex items-center space-x-2 text-yellow-500">
        {Array.from({ length: fullStars }).map((_, i) => (
          <span key={i}>★</span>
        ))}
        {Array.from({ length: 5 - fullStars }).map((_, i) => (
          <span key={i}>☆</span>
        ))}
        <span className="text-gray-700 text-sm">({ratingsCount})</span>
      </div>
    </div>
  );
}