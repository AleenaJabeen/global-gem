// Faq.jsx
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";


const faqData = [
  {
    q: "What is this platform about?",
    a: "We offer self-guided plans curated by locals. You get a personalized itinerary, maps, recommendations, and access to the host for questions—without being tied to a schedule.",
  },
  {
    q: "How is this different from a tour guide service?",
    a: "We offer self-guided plans curated by locals. You get a personalized itinerary, maps, recommendations, and access to the host for questions—without being tied to a schedule.",
  },
  { q: "Can I message the host before booking?", a: "Yes, you can message and ask questions before confirming any booking." },
  { q: "Do I have to meet travelers in person?", a: "No, everything is designed to be self-guided at your own pace." },
  { q: "What if there's an issue with a booking?", a: "You can reach out to support or the host to resolve any issues quickly." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="font-[Mulish] w-full max-w-[90%] mx-auto bg-[#1F1F1F] text-white rounded-[20px] md:p-6 p-4 sm:p-10 my-10">
      <h2 className="text-xl md:text-[33px] font-bold mb-6 pb-4">
        FREQUENTLY ASKED QUESTIONS (FAQ)
      </h2>

      <div className="space-y-2">
        {faqData.map((item, idx) => (
          <div
            key={idx}
            className="border border-[#9999A733] rounded-[10px] overflow-hidden"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex justify-between items-center px-4 sm:px-6 py-4 text-left font-medium "
            >
              <span className="text-xs sm:text-base font-extrabold">{item.q}</span>
              {openIndex === idx ? (
                <FiMinus className="cursor-pointer" />
              ) : (
                <FiPlus className="cursor-pointer" />
              )}
            </button>

            {openIndex === idx && (
              <div className="px-6 pb-4 md:text-sm text-xs text-white">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="md:w-[20%]  w-full mt-8">
        <button className="w-full text-base bg-white text-[#141414] px-6 py-3 rounded-full font-extrabold hover:bg-gray-200 transition">
          Contact
        </button>
      </div>
    </div>
  );
}
