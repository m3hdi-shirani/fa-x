"use client";

import React from "react";
import { Image } from "@imagekit/next";

interface ImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
}

const KIImage = ({ src, width, height, alt, className }: ImageProps) => {
  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

  return (
    <Image
      urlEndpoint={urlEndpoint}
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
    />
  );
};

export default KIImage;
