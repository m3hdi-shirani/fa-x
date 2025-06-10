"use client";

import { Image as IKImage } from "@imagekit/next";

interface ImageProps {
  src: string;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
  tr?: boolean;
}

const Image = ({ src, w, h, alt, className, tr }: ImageProps) => {
  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

  return (
    <IKImage
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
      width={w}
      height={h}
    />
  );
};

export default Image;
