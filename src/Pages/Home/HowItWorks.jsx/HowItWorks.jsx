import React from "react";
import truckIcon from "../../../assets/bookingIcon.png";

const HowItWorks = () => {
  return (
    <div className="py-8 max-w-6xl mx-auto">
      <h1 className="text-secondary text-3xl font-bold">How it Works</h1>

      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 py-3 gap-4">
        {/* Card-1 */}
        <div className="bg-white rounded-2xl p-6 space-y-2">
          <img src={truckIcon} alt="" />
          <h3 className="text-secondary font-bold text-xl">
            Booking Pick & Drop
          </h3>
          <p className="text-[#606060]">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        {/* Card-2 */}
        <div className="bg-white rounded-2xl p-6 space-y-2">
          <img src={truckIcon} alt="" />
          <h3 className="text-secondary font-bold text-xl">Cash On Delivery</h3>
          <p className="text-[#606060]">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        {/* Card-3 */}
        <div className="bg-white rounded-2xl p-6 space-y-2">
          <img src={truckIcon} alt="" />
          <h3 className="text-secondary font-bold text-xl">Delivery Hub</h3>
          <p className="text-[#606060]">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        {/* Card-4 */}
        <div className="bg-white rounded-2xl p-6 space-y-2">
          <img src={truckIcon} alt="" />
          <h3 className="text-secondary font-bold text-xl">
            Booking SME & Corporate
          </h3>
          <p className="text-[#606060]">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
