"use client";

import { shareAction } from "@/actions";
import Image from "@/app/components/Image";
import { ChangeEvent, useState } from "react";
import NextImage from "next/image";
import ImageEditor from "./ImageEditor";

const Share = () => {
  const [media, setMedia] = useState<File | null>(null);

  const [editorOpen, setEditorOpen] = useState<boolean>(false);

  const [settings, setSttings] = useState<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }>({
    type: "original",
    sensitive: false,
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  const previewUrl = media ? URL.createObjectURL(media) : null;

  console.log(media);

  return (
    <form
      action={(formData) => shareAction(formData, settings)}
      className="p-4 flex gap-4"
    >
      {/* Logo */}
      <div>
        <div className="relative h-10 w-10 rounded-full overflow-hidden">
          <Image
            src="general/avatar.png"
            alt="m3hdi.shirani"
            w={100}
            h={100}
            tr
          />
        </div>
      </div>
      {/* Other */}
      <div className="flex flex-1 flex-col ">
        <input
          name="description"
          type="text"
          placeholder="چه خبر؟"
          className="bg-transparent outline-none placeholder:text-textGray text-xl"
        />

        {/* Preview */}
        {media?.type.includes("image") ? (
          previewUrl ? (
            <div className="relative rounded-xl overflow-hidden">
              <NextImage
                className={`w-full ${
                  settings.type === "original"
                    ? "h-full object-contain"
                    : settings.type === "square"
                    ? "aspect-square object-cover"
                    : "aspect-video object-cover"
                }`}
                src={previewUrl}
                alt=""
                width={600}
                height={600}
              />
              <div
                onClick={() => setEditorOpen(true)}
                className="absolute top-2 right-2 bg-black bg-opacity-50 text-white py-1 px-4 rounded-full font-bold text-sm cursor-pointer"
              >
                ویرایش
              </div>
            </div>
          ) : null
        ) : null}
        {media?.type.includes("video") ? (
          previewUrl ? (
            <div className="relative">
              <video src={previewUrl} controls />
              <div
                onClick={() => setMedia(null)}
                className="absolute top-2 right-2 bg-black bg-opacity-50 text-white w-8 h-8 flex justify-center items-center rounded-full cursor-pointer"
              >
                X
              </div>
            </div>
          ) : null
        ) : null}

        {/* Image Editor */}
        {editorOpen && previewUrl ? (
          <ImageEditor
            onClose={() => setEditorOpen(false)}
            preview={previewUrl}
            settings={settings}
            setSettings={setSttings}
          />
        ) : null}

        {/* Btn Other Option */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <input
              name="file"
              className="hidden"
              id="file"
              type="file"
              onChange={handleFileChange}
              accept="image/*,video/*"
            />
            <label htmlFor="file">
              <Image
                src="icons/image.svg"
                alt=""
                w={20}
                h={20}
                className="cursor-pointer"
              />
            </label>
            <Image
              src="icons/gif.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              src="icons/poll.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              src="icons/emoji.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              src="icons/schedule.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              src="icons/location.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
          </div>
          <button className="bg-white text-black font-bold rounded-full py-2 px-4">
            پست کردن
          </button>
        </div>
      </div>
    </form>
  );
};

export default Share;
