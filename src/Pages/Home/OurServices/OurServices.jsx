import React from "react";
import service from "../../../assets/service.png";

const OurServices = () => {
  return (
    <div className="bg-secondary rounded-2xl p-4">
      <h1 className="text-white text-5xl text-center font-bold pt-10">
        Our Services
      </h1>
      <p className="text-[#DADADA] text-center py-2">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to <br /> business shipments — we deliver
        on time, every time.
      </p>

      {/* Cards */}
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10 pt-2 px-10">
        {/* Card-1 */}
        <div className="bg-white rounded-2xl p-6 space-y-4 shadow-lg text-center flex flex-col items-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-b from-[#EEEDFC] to-[EEEDFC0]">
            <img
              src={service}
              alt="Delivery Service Icon"
              className="w-12 h-12 object-contain"
            />
          </div>
          <h3 className="text-[#191C1E] font-bold text-xl mt-4">
            Express & Standard Delivery
          </h3>
          <p className="text-[#606060] text-sm leading-relaxed">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6
            hours from pick-up to drop-off.
          </p>
        </div>

        {/* Card-2 */}
        <div className="bg-primary rounded-2xl p-6 space-y-4 shadow-lg text-center flex flex-col items-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-b from-[#EEEDFC] to-[EEEDFC0]">
            <img
              src={service}
              alt="Delivery Service Icon"
              className="w-12 h-12 object-contain"
            />
          </div>
          <h3 className="text-[#191C1E] font-bold text-xl mt-4">
            Nationwide Delivery
          </h3>
          <p className="text-[#606060] text-sm leading-relaxed">
            We deliver parcels nationwide with home delivery in every district,
            ensuring your products reach customers within 48–72 hours.
          </p>
        </div>

        {/* Card-3 */}
        <div className="bg-white rounded-2xl p-6 space-y-4 shadow-lg text-center flex flex-col items-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-b from-[#EEEDFC] to-[EEEDFC0]">
            <img
              src={service}
              alt="Delivery Service Icon"
              className="w-12 h-12 object-contain"
            />
          </div>
          <h3 className="text-[#191C1E] font-bold text-xl mt-4">
            Fulfillment Solution
          </h3>
          <p className="text-[#606060] text-sm leading-relaxed">
            We also offer customized service with inventory management support,
            online order processing, packaging, and after sales support.
          </p>
        </div>

        {/* Card-4 */}
        <div className="bg-white rounded-2xl p-6 space-y-4 shadow-lg text-center flex flex-col items-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-b from-[#EEEDFC] to-[EEEDFC0]">
            <img
              src={service}
              alt="Delivery Service Icon"
              className="w-12 h-12 object-contain"
            />
          </div>
          <h3 className="text-[#191C1E] font-bold text-xl mt-4">
            Cash on Home Delivery
          </h3>
          <p className="text-[#606060] text-sm leading-relaxed">
            100% cash on delivery anywhere in Bangladesh with guaranteed safety
            of your product.
          </p>
        </div>

        {/* Card-5 */}
        <div className="bg-white rounded-2xl p-6 space-y-4 shadow-lg text-center flex flex-col items-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-b from-[#EEEDFC] to-[EEEDFC0]">
            <img
              src={service}
              alt="Delivery Service Icon"
              className="w-12 h-12 object-contain"
            />
          </div>
          <h3 className="text-[#191C1E] font-bold text-xl mt-4">
            Corporate Service / Contract In Logistics
          </h3>
          <p className="text-[#606060] text-sm leading-relaxed">
            Customized corporate services which includes warehouse and inventory
            management support.
          </p>
        </div>

        {/* Card-6 */}
        <div className="bg-white rounded-2xl p-6 space-y-4 shadow-lg text-center flex flex-col items-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-b from-[#EEEDFC] to-[EEEDFC0]">
            <img
              src={service}
              alt="Delivery Service Icon"
              className="w-12 h-12 object-contain"
            />
          </div>
          <h3 className="text-[#191C1E] font-bold text-xl mt-4">
            Parcel Return
          </h3>
          <p className="text-[#606060] text-sm leading-relaxed">
            Through our reverse logistics facility we allow end customers to
            return or exchange their products with online business merchants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
