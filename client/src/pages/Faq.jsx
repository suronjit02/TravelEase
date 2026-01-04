import { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { RiQuestionnaireFill } from "react-icons/ri";

const faqData = [
  {
    question: "How do I book a vehicle on TravelEase?",
    answer:
      "Booking a vehicle is simple. Browse our vehicle catalog, select your preferred vehicle, pick the date and time, and confirm your booking instantly. You'll receive all the booking details immediately.",
  },
  {
    question: "Are the vehicles verified and safe?",
    answer:
      "Yes, every vehicle listed on TravelEase is carefully verified. We ensure all vehicles meet safety and comfort standards so that you have a secure and reliable travel experience.",
  },
  {
    question: "Can I cancel or reschedule my booking?",
    answer:
      "Absolutely! TravelEase allows easy cancellation or rescheduling of your booking. Depending on the booking terms, you can modify your schedule hassle-free.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "Our 24/7 support team is ready to assist you via email, chat, or phone. Whether it's booking assistance or travel inquiries, we are here to help.",
  },
  {
    question: "Is pricing transparent?",
    answer:
      "Yes, all prices on TravelEase are clearly listed with no hidden fees. You’ll always know the exact cost before confirming your booking.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold text-center mb-10">
        Frequently Asked Questions <RiQuestionnaireFill className="inline " />
      </h2>

      <div className="space-y-2">
        {faqData.map((faq, index) => (
          <div key={index} className=" rounded-sm p-5 bg-white transition">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left text-sky-900 font-semibold"
            >
              {faq.question}
              {openIndex === index ? (
                <CiCircleMinus className="text-2xl" />
              ) : (
                <CiCirclePlus className="text-2xl" />
              )}
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
