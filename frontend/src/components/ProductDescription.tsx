interface ProductDescriptionProps {
  description: string;
}

export default function ProductDescription({ description }: ProductDescriptionProps) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Descrição</h2>
      <p className="text-gray-800 leading-relaxed">{description}</p>
    </div>
  );
}