import React, { use } from "react";
import iconCart from "../../../../assets/customer-top.png";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  console.log(reviews);

  return (
    <div className="space-y-3 pt-5 pb-20">
      <img className="mx-auto" src={iconCart} alt="Service" />
      <h1 className="text-secondary text-center text-[40px] font-bold">
        What our customers are sayings
      </h1>
      <p className="text-[#606060] text-center not-odd:">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce <br /> pain, and strengthen your body
        with ease!
      </p>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
         loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: "50%",
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
