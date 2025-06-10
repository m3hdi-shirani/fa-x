import React from "react";
import Image from "./Image";
import PostInfo from "./PostInfo";
import PostInteraction from "./PostInteraction";
import { imagekit } from "@/utils";
import Video from "./Video";

interface FileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  url: string;
  fileType: string;
  customMetadata?: {
    sensitive: boolean;
  };
}

const Post = async () => {
  const getFileDetails = (fildId: string): Promise<FileDetailsResponse> => {
    return new Promise((resolve, reject) => {
      imagekit.getFileDetails(fildId, function (error, result) {
        if (error) {
          reject(error);
        } else resolve(result as FileDetailsResponse);
      });
    });
  };

  const fileDetails = await getFileDetails("6846ed2db13a102537dfb7a5");

  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      {/* Post Type */}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="#71767b"
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
          />
        </svg>
        <span>Mehdi باز پست کرد</span>
      </div>
      {/* Content Post */}
      <div className="flex gap-4">
        {/* Logo account */}
        <div className="relative h-10 w-10 rounded-full overflow-hidden">
          <Image
            src="general/avatar.png"
            alt="m3hdi.shirani"
            w={100}
            h={100}
            tr
          />
        </div>
        {/* Content */}
        <div className="flex-1 flex flex-col gap-2">
          {/* Top */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="font-bold text-md">Mehdi Shirani</h2>
              <span className="text-textGray">@m3hdi</span>
              <span className="text-textGray">1روز پیش</span>
            </div>
            <PostInfo />
          </div>
          {/* Description Post and Media */}
          <p>
            مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد،
            همه میگفتند : تو به هیچ دردی نمیخوری، یک شب که مداد رنگی ها تو سیاهی
            شب گم شده بودند، مداد سفید تا صبح ماه کشید مهتاب کشید و انقدر ستاره
            کشید که کوچک و کوچکتر شد صبح توی جعبه مداد رنگی جای خالی او با هیچ
            رنگی پر نشد، به یاد هم باشیم شاید فردا ما هم در کنار هم نباشیم…
          </p>
          {fileDetails && fileDetails.fileType === "image" ? (
            <Image
              src={fileDetails.filePath}
              alt=""
              w={fileDetails.width}
              h={fileDetails.height}
              className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
            />
          ) : (
            <Video
              src={fileDetails.filePath}
              className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
            />
          )}
          <PostInteraction />
        </div>
      </div>
    </div>
  );
};

export default Post;
