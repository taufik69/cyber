import { iconsProvider } from "@/public/icons/iconsProvider";
import { Navitem } from "@/types/types";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  const navItem: Navitem[] = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Contact Us",
      path: "/contact",
    },
    {
      id: 4,
      name: "Blog",
      path: "/blog",
    },
  ];
  return (
    <div className="grid  grid-cols-[80%20%]  items-center justify-between">
      <div className="justify-self-end">
        <ul className="grid grid-cols-4 gap-x-5 justify-items-center ">
          {navItem?.map((item) => (
            <Link
              key={item.id}
              href={`${item.path}`}
              prefetch={false}
              className="text-main_black font-normal hover:font-medium  transition-all text-[16px]"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </div>
      {/* icons */}
      <div className="justify-self-end">
        <div className="flex items-center gap-x-5">
          <span className="text-main_black text-3xl">
            {iconsProvider.heart}
          </span>
          <span className="text-main_black text-2xl">{iconsProvider.cart}</span>
          <span className="text-main_black text-2xl">{iconsProvider.user}</span>
        </div>
      </div>
    </div>
  );
};
