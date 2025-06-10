"use client";

import { Video as IKVideo } from "@imagekit/next";

interface VideoPropsType {
  src: string;
  className?: string;
}
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Video = ({ src, className }: VideoPropsType) => {
  return (
    <IKVideo
      urlEndpoint={urlEndpoint}
      src={src}
      controls
      width={500}
      height={500}
      className={className}
    />
  );
};

export default Video;
