// src/components/ProductGallery.tsx

'use client';

interface ProductGalleryProps {
  images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  return (
    <div className="flex">
      {/* Miniaturas - coluna */}
      <div className="flex flex-col space-y-2 mr-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Imagem ${index + 1}`}
            className="w-16 h-16 object-cover border rounded cursor-pointer hover:ring-2 hover:ring-blue-400"
          />
        ))}
      </div>

      {/* Imagem principal */}
      <div className="flex-1">
        <img
          src={images[0]}
          alt="Imagem principal"
          className="w-full object-contain rounded border"
        />
      </div>
    </div>
  );
}