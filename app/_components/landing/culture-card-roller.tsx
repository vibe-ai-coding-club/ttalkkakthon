"use client";

import { useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper/types";

import type { CultureItem } from "@/app/sections/landing-data";
import { CultureCard } from "./culture-card";

type CultureCardRollerProps = {
  items: CultureItem[];
};

export const CultureCardRoller = ({ items }: CultureCardRollerProps) => {
  const swiperRef = useRef<SwiperInstance | null>(null);

  const stopAutoplay = () => {
    swiperRef.current?.autoplay?.stop();
  };

  const startAutoplay = () => {
    swiperRef.current?.autoplay?.start();
  };

  return (
    <div
      className="w-full"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
      onTouchStart={stopAutoplay}
      onTouchEnd={startAutoplay}
      onTouchCancel={startAutoplay}
    >
      <Swiper
        modules={[Autoplay]}
        loop
        speed={5000}
        allowTouchMove
        grabCursor
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        spaceBetween={24}
        slidesPerView="auto"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          768: {
            spaceBetween: 28,
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.title} className="!w-auto">
            <CultureCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
