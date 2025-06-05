'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex space-x-4">
      {/* Thumbnails */}
      <div className="flex flex-col space-y-2">
        {images.map((img, idx) => (
          <Image
            width={64}
            height={64}
            key={idx}
            src={img}
            alt={`Thumbnail ${idx}`}
            className={`w-16 h-16 object-cover rounded cursor-pointer border ${selectedImage === img ? 'border-blue-500' : 'border-transparent'}`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {/* Large Image */}
      <div className="flex-1 flex items-center justify-center">
        <Image
          width={400}
          height={400}
          src={selectedImage}
          alt="Selected"
          className="max-h-[400px] object-contain"
        />
      </div>
    </div>
  );
}