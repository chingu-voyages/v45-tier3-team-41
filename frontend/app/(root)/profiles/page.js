"use client";

import React from "react";
import Image from "next/image";

import CardMovieNoButton from "@/components/cards/cardMovieNoButton";
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
      <div className="flex align-center justify-center">
        <Image
          // className="mx-auto"
          src="/assets/logo.svg" // To be replaced with user icon and set the user name here
          alt="user"
          width={40}
          height={40}
        />
        <h4 className="text-2xl font-semibold leading-none tracking-tight text-white mb-5">
          User Name
        </h4>
      </div>
      <div className="h-12"></div>

      <div>
        <h3 className="text-2xl font-semibold leading-none tracking-tight text-white mb-5">
          These are the movies the user and you have in common
        </h3>
        <Swiper
          // install Swiper module
          slidesPerView={"1"}
          navigation={{ clickable: true }}
          pagination={{ clickable: true }}
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
          modules={[Pagination, Navigation, A11y]}
          className="mySwiper mt-5"
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <CardMovieNoButton />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieNoButton />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieNoButton />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieNoButton />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieNoButton />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieNoButton />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieNoButton />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieNoButton />
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
}
