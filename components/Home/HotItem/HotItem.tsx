"use client";
import { imageProvider } from "@/public/images/imageProvide";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { Autoplay, Mousewheel, Pagination, EffectCards } from "swiper/modules";

export const HotItem = () => {
  return (
    <div>
      <div className="grid grid-cols-2  ">
        <div className="grid grid-rows-2">
          <div>
            <Swiper
              effect="cards"
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper w-[790px]"
            >
              {[...new Array(10)].map((item, i) => (
                <SwiperSlide key={i}>
                  <Image
                    src={imageProvider.suareBanner1}
                    width={360}
                    height={272}
                    alt="banner"
                    className="w-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <Image
                src={imageProvider.suareBanner2}
                width={360}
                height={272}
                alt="banner iamge"
                className="w-full"
              />
            </div>
            <div>
              <Image
                src={imageProvider.suareBanner3}
                width={360}
                height={272}
                alt="banner iamge"
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="h-[732px]">
          <Swiper
            direction="vertical"
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Mousewheel, Pagination, Autoplay]}
            className="mySwiper h-full"
          >
            {[...new Array(10)].map((item, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={imageProvider.bigBanner}
                  width={406}
                  height={632}
                  alt="banner"
                  className="w-full h-full object-cover"
                  priority
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
