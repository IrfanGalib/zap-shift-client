import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { userName, review: testimonial, user_photoURL, ratings } = review;
  return (
    <div>
      <div className="w-full max-w-md p-6 bg-base-100 rounded-xl shadow-md border border-gray-200">
        {/* Quote Icon */}
        <FaQuoteLeft className="text-3xl text-secondary opacity-60 mb-3" />

        {/* Quote Text */}
        <p className="text-[#606060] text-sm  mb-5">{testimonial}</p>

        <div className="divider my-3 text-secondary"></div>

        {/* Profile Section */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-full">
            <img className="rounded-full" src={user_photoURL} alt="" />
          </div>
          <div>
            <h3 className=" text-secondary font-bold">{userName}</h3>
            <p className="text-sm text-[#606060] flex items-center gap-2">
              <FaStar />
              {ratings}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
