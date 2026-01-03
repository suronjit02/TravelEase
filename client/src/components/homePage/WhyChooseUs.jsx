import React from "react";
import { FaCarSide } from "react-icons/fa";
import { CiFaceSmile } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const WhyChooseUs = () => {
  return (
    <div className="my-2 md:my-10">
      <section className="flex flex-col justify-center items-center secondary py-10 px-4 sm:px-10 md:px-25">
        <h3 className="text-white text-3xl font-semibold mb-10">
          Why Choose Us
        </h3>
        <div className="flex flex-col sm:flex-row items-start gap-5">
          {/* Card 1 */}
          <div className="flex flex-col justify-center items-center text-center">
            <FaCarSide className="text-5xl text-white" />
            <h4 className="text-lg font-semibold text-white">
              Variety of Car Brands
            </h4>
            <p className="text-gray-400 mt-2">
              Choose from a wide range of vehicles from top brands to match your
              style, comfort, and travel needs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-center items-center text-center">
            <CiFaceSmile className="text-5xl text-white" />
            <h4 className="text-lg font-semibold text-white">
              Best Rate Guarantee
            </h4>
            <p className="text-gray-400 mt-2">
              Enjoy transparent pricing with no hidden fees, ensuring you always
              get the best value for your journey.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-center items-center text-center">
            <CiHeart className="text-5xl text-white" />
            <h4 className="text-lg font-semibold text-white">
              Awesome Customer Support
            </h4>
            <p className="text-gray-400 mt-2">
              Our dedicated support team is available 24/7 to help you with
              bookings, inquiries, and any travel concerns.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
