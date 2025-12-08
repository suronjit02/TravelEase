import React from "react";
import { Link } from "react-router";

const BannerSection = () => {
  return (
    <div
      className="relative h-[90vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/vehicle.png')" }}
    >
      <div className="bg-black/25 w-full h-full flex flex-col justify-evenly items-center text-center text-white p-4">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            TravelEase – Book Your Journey
          </h1>
          <p className="max-w-xl mb-6 text-lg">
            Choose your perfect vehicle and plan your trip with ease.
          </p>
        </div>

        <Link
          to="/all-vehicles"
          className="btn border-none bg-linear-to-r bg-sky-600 hover:bg-sky-700 mt-3 inline-block px-4 py-2 text-white"
        >
          Explore All Vehicles
        </Link>
      </div>
    </div>
  );
};

export default BannerSection;
