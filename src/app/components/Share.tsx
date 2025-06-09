import Image from "@/app/components/Image";

const Share = () => {
  return (
    <div className="p-4 flex gap-4">
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
          type="text"
          placeholder="چه خبر؟"
          className="bg-transparent outline-none placeholder:text-textGray text-xl"
        />
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <Image
              src="icons/image.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
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
    </div>
  );
};

export default Share;
