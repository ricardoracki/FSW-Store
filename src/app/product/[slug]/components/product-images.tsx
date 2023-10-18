"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  imageUrls: string[];
  name: string;
}

const ProductImages = ({ imageUrls, name }: Props) => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  const handleClick = (url: string) => {
    setCurrentImage(url);
  };

  return (
    <div className="flex flex-col">
      <div className="flex h-[380px] w-full items-center justify-center bg-accent">
        <Image
          src={currentImage}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="mt-8 grid grid-cols-4 gap-4 px-5">
        {imageUrls.map((imageUrl) => (
          <button
            key={imageUrl}
            onClick={() => handleClick(imageUrl)}
            aria-busy={currentImage == imageUrl}
            className="flex h-[80px] items-center justify-center rounded-lg bg-accent aria-busy:border-2 aria-busy:border-solid aria-busy:border-primary "
          >
            <Image
              src={imageUrl}
              alt={name}
              height={0}
              width={0}
              sizes="100vw"
              className="max-w[80%] h-auto max-h-[70%] w-auto"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
