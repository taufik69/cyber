import { imageProvider } from "@/public/images/imageProvide";
import Image from "next/image";

export const HotBanner = () => {
  const images = [
    imageProvider.sercive1,
    imageProvider.sercive2,
    imageProvider.sercive3,
    imageProvider.sercive4,
  ];

  return (
    <div className="overflow-hidden bg-red-500">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...images, ...images, ...images].map((img, i) => (
          <div key={i} className="w-[360px] h-[640px] shrink-0">
            <Image
              src={img}
              alt={`banner-${i}`}
              width={360}
              height={640}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
