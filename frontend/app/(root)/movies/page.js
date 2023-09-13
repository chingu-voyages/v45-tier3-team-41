"use client";

import React from "react";

import CardMovie from "@/components/cards/cardMovie";
import { Pagination, Navigation, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function page() {
  return (
    <main className="p-5">
      <div className="h-28"></div>
      <div>
        <h3 className="text-2xl font-semibold leading-none tracking-tight text-white mb-5">Browse and save movies to your list</h3>
          <Swiper
      // install Swiper module
      // centeredSlides={true}
      slidesPerView={'1'}
      
      navigation={{ clickable: true,}}
      pagination={{clickable: true,}}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        1500: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      modules={[ Pagination, Navigation]}
      className="mySwiper mt-5"
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><CardMovie/></SwiperSlide>
      <SwiperSlide><CardMovie/></SwiperSlide>
      <SwiperSlide><CardMovie/></SwiperSlide>
      <SwiperSlide><CardMovie/></SwiperSlide>
      <SwiperSlide><CardMovie/></SwiperSlide>
      <SwiperSlide><CardMovie/></SwiperSlide>
      <SwiperSlide><CardMovie/></SwiperSlide>
      <SwiperSlide><CardMovie/></SwiperSlide>
    </Swiper>
    </div>

    <div className="h-28"></div>


    <div>
        <h3 className="text-2xl font-semibold leading-none tracking-tight text-white mb-5">My List</h3>
          <Swiper
      // install Swiper module
      centeredSlides={true}
      slidesPerView={'1'}
      
      navigation={{ clickable: true,}}
      pagination={{clickable: true,}}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      modules={[ Pagination, Navigation]}
      className="mySwiper mt-5"
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><CardMovie/></SwiperSlide>
      <SwiperSlide><CardMovie/></SwiperSlide>
      <SwiperSlide><CardMovie/></SwiperSlide>
      <SwiperSlide><CardMovie/></SwiperSlide>
    </Swiper>

    </div>
    </main>
  );
}
