"use client";

import { Container } from "@/components/commoncomponents/Container";
import React, { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

import {
  BiCameraHome,
  BiCommand,
  BiHeadphone,
  BiLaptop,
  BiLeftArrow,
  BiPhone,
  BiPhoneCall,
  BiRightArrow,
} from "react-icons/bi";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
export const BrowseCategory = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const categoryItem = [
    { id: 1, name: "phones", icon: <BiPhone /> },
    { id: 2, name: "computers", icon: <BiCommand /> },
    { id: 3, name: "smart phones", icon: <BiPhoneCall /> },
    { id: 4, name: "cameras", icon: <BiCameraHome /> },
    { id: 5, name: "headphones", icon: <BiHeadphone /> },
    { id: 6, name: "laptops", icon: <BiLaptop /> },
    { id: 7, name: "gaming", icon: <BiLaptop /> },
    { id: 8, name: "gadgets", icon: <BiCameraHome /> },
    { id: 9, name: "gaming", icon: <BiLaptop /> },
    { id: 10, name: "gadgets", icon: <BiCameraHome /> },
    { id: 11, name: "gaming", icon: <BiLaptop /> },
    { id: 12, name: "gadgets", icon: <BiCameraHome /> },
  ];

  return (
    <div className="py-20">
      <Container>
        <div>
          {/* Top Title + Arrows */}
          <div className="flex justify-between items-center">
            <h2 className="text-main_black font-medium text-2xl">
              Browse By Category
            </h2>

            <div className="flex items-center gap-3 text-xl">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition cursor-pointer"
              >
                <BiLeftArrow />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition cursor-pointer"
              >
                <BiRightArrow />
              </button>
            </div>
          </div>

          {/* Slider */}
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={6}
            spaceBetween={20}
            className="mt-6"
          >
            {categoryItem.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col justify-center items-center bg-[#EDEDED] rounded-xl px-5 py-10 cursor-pointer hover:bg-gray-300 transition-all duration-300">
                  <span className="text-main_black text-2xl">{item.icon}</span>
                  <span className="text-main_black font-medium text-lg mt-2">
                    {item.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};
