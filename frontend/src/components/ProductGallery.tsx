interface ProductGalleryProps {
  images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  return (
    <div>
      {images && images.length > 0 && (
        <img
          src={images[0]}
          alt="Main product"
          className="w-full rounded border mb-4"
        />
      )}
      <div className="flex space-x-2">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Thumbnail ${idx}`}
            className="w-16 h-16 object-cover border rounded cursor-pointer hover:ring-2 ring-[#3483fa]"
          />
        ))}
      </div>
    </div>
  );
}