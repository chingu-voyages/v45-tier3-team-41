"use client";

import React from "react";
import "../../globals.css";

import CardMovie from "@/components/cards/cardMovie";
import CardMovieRemove from "@/components/cards/cardMovieRemove";
import SearchBar from "@/components/forms/SearchBar";

import { Pagination, Navigation, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function page() {
  return (
    <main className="p-5">
      <div className="h-20"></div>
      <div className="flex justify-end">
        <SearchBar />
      </div>
      <div>
        <h3 className="text-2xl font-semibold leading-none tracking-tight text-white mb-5">
          Browse and save the movies
        </h3>
        <Swiper
          // install Swiper module
          slidesPerView={"1"}
          navigation={{ clickable: true }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-position",
          }}
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
          modules={[Pagination, Navigation]}
          className="mySwiper my-5"
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <CardMovie />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovie />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovie />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovie />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovie />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovie />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovie />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovie />
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination-position" />
      </div>

      <div className="h-12"></div>

      <div>
        <h3 className="text-2xl font-semibold leading-none tracking-tight text-white mb-5">
          My List
        </h3>
        <Swiper
          // install Swiper module
          slidesPerView={"1"}
          navigation={{ clickable: true }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
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
          modules={[Pagination, Navigation]}
          className="mySwiper my-5"
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <CardMovieRemove />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieRemove />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieRemove />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieRemove />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieRemove />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieRemove />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieRemove />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieRemove />
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination-position" />
      </div>
    </main>
  );
}
