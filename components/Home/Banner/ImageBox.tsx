"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { Autoplay, EffectCube, Pagination } from "swiper/modules";
import Image from "next/image";
import { imageProvider } from "@/public/images/imageProvide";

export const ImageBox = () => {
  return (
    <div className="w-full max-w-[406px]">
      <Swiper
        effect="cube"
        grabCursor={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        cubeEffect={{
          shadow: false,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper"
      >
        {[...new Array(10)].map((item) => (
          <SwiperSlide key={item}>
            <Image
              src={imageProvider.banner}
              width={406}
              height={632}
              alt="banner"
              className="w-full h-auto object-cover"
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
