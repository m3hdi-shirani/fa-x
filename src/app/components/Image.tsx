"use client";

import React from "react";
import { Image } from "@imagekit/next";

interface ImageProps {
  src: string;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
  tr?: boolean;
}

const KIImage = ({ src, w, h, alt, className, tr }: ImageProps) => {
  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

  return (
    <Image
      {...(tr
        ? {
            transformation: [
              {
                width: `${w}`,
                height: `${h}`,
              },
            ],
          }
        : {
            width: w,
            height: h,
          })}
      urlEndpoint={urlEndpoint}
      src={src}
      alt={alt}
      className={className}
    />
  );
};

export default KIImage;
