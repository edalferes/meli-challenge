'use client';

type ProductSpecsProps = {
  specs: Record<string, string>;
};

export default function ProductSpecs({ specs }: ProductSpecsProps) {
  if (!specs) return null;

  return (
    <div className="bg-white p-4 rounded shadow space-y-2">
      <h2 className="text-lg font-semibold text-gray-800">Especificações do produto</h2>
      <ul className="list-disc list-inside text-gray-700">
        {Object.entries(specs).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
}