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
import LiveTracking from "../../../../assets/live-tracking.png";
import SelfDelivery from "../../../../assets/safe-delivery.png";
import CallCenter from "../../../../assets/location-merchant.png";

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
    <div>
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

      <div className="border border-dashed border-secondary opacity-50 my-20"></div>

      <div className="space-y-7">
        {/* Block-1 */}
        <div className="bg-white rounded-2xl p-10">
          <div className="flex items-center gap-10">
            <div className="flex-shrink-0 w-[22%] border-r-2 border-dashed border-[#C9C9C9] pr-10">
              <img src={LiveTracking} alt="Live Parcel Tracking Illustration" />
            </div>

            {/* Right Text */}
            <div className="flex-grow">
              <h1 className="text-[#0D3B3F] text-2xl font-bold mb-2">
                Live Parcel Tracking
              </h1>

              <p className="text-[#606060] leading-relaxed">
                Stay updated in real-time with our live parcel tracking feature.
                From pick-up to delivery, monitor your shipment's journey and
                get instant status updates for complete peace of mind.
              </p>
            </div>
          </div>
        </div>

        {/* Block-2 */}
        <div className="bg-white rounded-2xl p-10">
          <div className="flex items-center gap-10">
            <div className="flex-shrink-0 w-[22%] border-r-2 border-dashed border-[#C9C9C9] pr-10">
              <img src={SelfDelivery} alt="100% Safe Delivery" />
            </div>

            {/* Right Text */}
            <div className="flex-grow">
              <h1 className="text-[#0D3B3F] text-2xl font-bold mb-2">
                100% Safe Delivery
              </h1>

              <p className="text-[#606060] leading-relaxed">
                We ensure your parcels are handled with the utmost care and
                delivered securely to their destination. Our reliable process
                guarantees safe and damage-free delivery every time.
              </p>
            </div>
          </div>
        </div>

        {/* Block-3 */}
        <div className="bg-white rounded-2xl p-10">
          <div className="flex items-center gap-10">
            <div className="flex-shrink-0 w-[22%] border-r-2 border-dashed border-[#C9C9C9] pr-10">
              <img src={CallCenter} alt="24/7 Call Center Support" />
            </div>

            {/* Right Text */}
            <div className="flex-grow">
              <h1 className="text-[#0D3B3F] text-2xl font-bold mb-2">
                24/7 Call Center Support
              </h1>

              <p className="text-[#606060] leading-relaxed">
                Our dedicated support team is available around the clock to
                assist you with any questions, updates, or delivery
                concerns—anytime you need us.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-dashed border-secondary opacity-50 my-20"></div>
    </div>
  );
};

export default Brands;
