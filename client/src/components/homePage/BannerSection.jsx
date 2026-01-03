import React from "react";
import { Link } from "react-router";

const BannerSection = () => {
  return (
    <div
      className="relative h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/vehicle.png')" }}
    >
      <div className="bg-black/60 w-full h-full flex flex-col justify-evenly items-center text-center text-white p-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl sm:text-5xl font-bold  mb-4">
            TravelEase – Book Your Journey
          </h1>
          <p className="max-w-xl text-lg text-gray-300">
            Choose your perfect vehicle and plan your trip with ease.
          </p>
        </div>

        <Link
          to="/all-vehicles"
          className="btn border-none primary text-white "
        >
          Explore All Vehicles
        </Link>
      </div>
    </div>
  );
};

export default BannerSection;
