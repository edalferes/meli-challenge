'use client';

interface ProductSpecsProps {
  specs: Record<string, string | number | undefined>;
}

export default function ProductSpecs({ specs }: ProductSpecsProps) {
  if (!specs || Object.keys(specs).length === 0) return null;

  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white text-sm text-gray-700 space-y-2">
      {Object.entries(specs).map(([key, value]) => (
        <div key={key}>
          <span className="font-medium">{key}:</span> {value}
        </div>
      ))}
    </div>
  );
}