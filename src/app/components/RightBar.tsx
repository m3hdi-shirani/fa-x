import Link from "next/link";
import React from "react";
import Image from "@/app/components/Image";

const menuList = [
  {
    id: 1,
    name: "خانه",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "کاوش",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "آگاه‌سازی‌ها",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "پیام‌ها",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "نشانک‌ها",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "شغل‌ها",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "انجمن‌ها",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "نمایه",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 9,
    name: "بیشتر",
    link: "/",
    icon: "more.svg",
  },
];

const RightBar = () => {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      {/* Logo|Menu|Btn */}
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
        {/* Logo */}
        <Link href="/" className="p-2">
          <Image src={"icons/logo.svg"} alt="لوگوی X" h={24} w={24} />
        </Link>
        {/* List Menu */}
        <div className="flex flex-col gap-4">
          {menuList.map((item) => (
            <Link
              className="flex items-center gap-4 p-2 rounded-full hover:bg-[#141414]"
              href={item.link}
              key={item.id}
            >
              <Image src={`icons/${item.icon}`} alt={item.name} w={24} h={24} />
              <span className="hidden xxl:inline">{item.name}</span>
            </Link>
          ))}
          {/* Btn */}
          <Link
            href="/"
            className="xxl:hidden bg-white text-black rounded-full w-12 h-12 flex item-center justify-center"
          >
            <Image src="icons/post.svg" alt="پست جدید" w={24} h={24} />
          </Link>
          <Link
            href="/"
            className="hidden xxl:block bg-white rounded-full text-black  py-2 px-20 font-bold"
          >
            پست کردن
          </Link>
        </div>
      </div>
      {/* Information account */}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="relative h-10 w-10 rounded-full overflow-hidden">
            <Image
              src="/general/avatar.png"
              alt="mehdi shirani"
              w={100}
              h={100}
              tr
            />
          </div>
          <div className="hidden xxl:flex flex-col">
            <span className="font-bold">Mehdi Shirani</span>
            <span className=" text-textGray">m3hdi.shirani@gmail.com</span>
          </div>
        </div>
        <div className="hidden xxl:block cursor-pointer font-bold">...</div>
      </div>
    </div>
  );
};

export default RightBar;
