import { Button } from "./Button";
import Image from "next/image";
import { imageProvider } from "@/public/images/imageProvide";
import { ProductTypes } from "@/types/types";
import { FaHeart } from "react-icons/fa6";

export const ProductBox = ({
  productsItem,
}: {
  productsItem: ProductTypes[];
}) => {
  console.log(productsItem);
  return (
    <div className="grid grid-cols-4 gap-4">
      {/* Product info */}
      {productsItem?.slice(0, 8).map((item) => (
        <div
          key={item.id}
          className="flex flex-col  bg-[#F6F6F6]  gap-y-2  items-center px-5 py-6 rounded-md"
        >
          <div className="self-end text-black cursor-pointer">
            <FaHeart size={24} />
          </div>
          <Image
            src={item.images[0]}
            width={200}
            height={200}
            alt="product"
            className=" object-cover"
          />
          <h2 className="text-[16px] font-medium text-main_black">
            {item.title}
          </h2>
          <p className="text-sm text-gray-700">From ${item.price}</p>
          <Button className="mt-2 px-16 py-2 cursor-pointer bg-main_black text-main_white text-center rounded">
            Buy Now
          </Button>
        </div>
      ))}
    </div>
  );
};
