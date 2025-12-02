import React, { useState } from "react";
import { FiChevronDown, FiArrowUpRight } from "react-icons/fi";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does this posture corrector work?",
      answer:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, helping you maintain proper posture throughout the day.",
    },
    {
      question: "Is it suitable for all ages and body types?",
      answer:
        "Yes! The posture corrector is designed to be adjustable and comfortable, making it suitable for people of different ages, sizes, and body shapes.",
    },
    {
      question: "Does it really help with back pain and posture improvement?",
      answer:
        "Consistent use of a posture corrector can help relieve back pain, reduce slouching, and promote long-term posture improvement by training your muscles to align correctly.",
    },
    {
      question: "Does it have smart features like vibration alerts?",
      answer:
        "Some advanced models include vibration alerts that gently remind you whenever your back begins to slouch, helping you correct posture instantly.",
    },
    {
      question: "How will I be notified when the product is back in stock?",
      answer:
        "You will receive an email or SMS notification as soon as the product becomes available, ensuring you never miss the restock.",
    },
  ];

  return (
    <div className="pt-5 pb-20 text-center">
      {/* Headings */}
      <h1 className="text-3xl font-bold text-[#003F44]">
        Frequently Asked Question (FAQ)
      </h1>
      <p className="text-[#7A7A7A] mt-3 max-w-2xl mx-auto">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with
        ease!
      </p>

      {/* FAQ Section */}
      <div className="mt-12 max-w-3xl mx-auto space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl border transition-all duration-300 ${
              openIndex === index
                ? "bg-[#C3DFE2] border-secondary"
                : "bg-white border-primary"
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center p-5 text-left"
            >
              <span
                className={`font-semibold ${
                  openIndex === index ? "text-[#003F44]" : "text-[#444]"
                }`}
              >
                {item.question}
              </span>

              <FiChevronDown
                className={`text-xl transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && item.answer && (
              <div className="px-5 pb-5 text-[#606060] leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-10 items-center">
        <button className="bg-[#C8FF5A] px-8 py-4 rounded-full text-[#003F44] font-semibold items-center mx-auto">
          See More FAQ’s
        </button>
        <button className="bg-black text-white p-4 rounded-full">
          <FiArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default FAQ;
