import React from "react";
import CallCenter from "../../../assets/location-merchant.png";
import bar from "../../../assets/be-a-merchant-bg.png";

const CustomerSatisfaction = () => {
  return (
    <div className="relative bg-[#003F44] rounded-3xl overflow-hidden mb-20">
      {/* Top Curve Light Effect */}
      <img src={bar} alt="" className="w-full object-cover" />

      {/* Content Section */}
      <div className="flex justify-between items-center px-12 -mt-30 pb-15">
        {/* Left Content */}
        <div className="max-w-xl space-y-4">
          <h1 className="font-bold text-white text-4xl leading-snug">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>

          <p className="text-[#DADADA] text-base leading-relaxed">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>

          <div className="flex gap-4 pt-2">
            <button className="bg-[#C8FF5A] text-[#003F44] font-medium px-6 py-3 rounded-full">
              Become a Merchant
            </button>

            <button className="border border-[#C8FF5A] text-[#C8FF5A] font-medium px-6 py-3 rounded-full">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>

        {/* Right Illustration */}
        <img src={CallCenter} alt="Merchant Illustration" className="full" />
      </div>
    </div>
  );
};

export default CustomerSatisfaction;
