import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../assets/banner/banner1.png";
import banner2 from "../../../assets/banner/banner2.png";
import banner3 from "../../../assets/banner/banner3.png";
import { FaLocationArrow } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showArrows={true}
        showStatus={false}
      >
        {/* Banner - 1 */}
        <div className="relative w-full h-full my-5">
          <img
            className="w-full h-full object-cover rounded-4xl"
            src={banner1}
            alt="Banner 1"
          />
          <div className="absolute bottom-10 left-5 md:bottom-20 md:left-20 flex gap-4 items-center w-full">
            <div className="flex items-center gap-2">
              <button className="bg-primary px-6 py-3 font-bold text-black rounded-xl hover:bg-[#c3d64e] transition">
                Track Your Parcel
              </button>
              <button className="bg-secondary p-4 text-white rounded-full -ml-1 hover:bg-black transition">
                <FaLocationArrow className="text-primary" />
              </button>
            </div>
            <button className="bg-white px-6 py-3 font-bold text-black rounded-xl border border-gray-300 hover:bg-gray-50 transition shadow-sm">
              Be a Rider
            </button>
          </div>
        </div>

        {/* Banner - 2 */}
        <div className="relative w-full h-full my-5">
          <img
            className="w-full h-full object-cover rounded-4xl"
            src={banner2}
            alt="Banner 2"
          />
        </div>

        {/* Banner - 3 */}
        <div className="relative w-full h-full my-5">
          <img
            className="w-full h-full object-cover rounded-4xl"
            src={banner3}
            alt="Banner 3"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
