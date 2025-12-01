import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import amazon from "../../../../assets/brands/amazon.png";
import amazonVector from "../../../../assets/brands/amazon_vector.png";
import casio from "../../../../assets/brands/casio.png";
import moonstar from "../../../../assets/brands/moonstar.png";
import randstad from "../../../../assets/brands/randstad.png";
import star from "../../../../assets/brands/star.png";
import starPeople from "../../../../assets/brands/start_people.png";

const brandLogos = [
  amazon,
  amazonVector,
  casio,
  moonstar,
  randstad,
  star,
  starPeople,
];

const Brands = () => {
  return (
    <div className="py-20 space-y-10">
      <h1 className="text-secondary text-2xl lg:text-3xl font-bold  text-center">
        We've helped thousands of sales teams
      </h1>

      <Swiper
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {brandLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
