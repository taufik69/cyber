import { iconsProvider } from "@/public/icons/iconsProvider.js";
import { IoSearchOutline } from "react-icons/io5";

export const Search = () => {
  return (
    <div className="">
      <div className="relative ">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 w-full  bg-[#F5F5F5] rounded"
        />
        <span className="text-main_black absolute top-1/2 -translate-1/2 right-2">
          {" "}
          {iconsProvider.search}
        </span>
      </div>
    </div>
  );
};
