'use client';

interface ProductSummaryProps {
  title: string;
  ratings: number;
  ratingsCount: number;
}

export default function ProductSummary({ title, ratings, ratingsCount }: ProductSummaryProps) {
  const fullStars = Math.floor(ratings);
  const halfStar = ratings % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="space-y-2">
      
      {/* Título */}
      <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>

      {/* Estrelas + Avaliações */}
      <div className="flex items-center space-x-1 text-yellow-500 text-lg">
        {Array.from({ length: fullStars }).map((_, i) => (
          <span key={`full-${i}`}>★</span>
        ))}
        {halfStar && <span>★</span>} {/* Se preferir pode usar meio estrela com outro char/icon */}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <span key={`empty-${i}`}>☆</span>
        ))}
        <span className="text-gray-700 text-sm ml-1">({ratingsCount})</span>
      </div>
    </div>
  );
}