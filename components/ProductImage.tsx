"use client";

import Image from "next/image";
import { useState } from "react";

type ProductImageProps = {
  product: Product;
  fill?: boolean;
};

export const ProductImage = ({ product, fill }: ProductImageProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {fill ? (
        <Image
          fill
          src={product.image}
          alt={product.title}
          className={` object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            loading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }`}
          onLoadingComplete={() => setLoading(false)}
        />
      ) : (
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={1000}
          className={` object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            loading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }`}
          onLoadingComplete={() => setLoading(false)}
        />
      )}
    </>
  );
};
