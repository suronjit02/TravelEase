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
          className="btn border-none px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
        >
          Explore All Vehicles
        </Link>
      </div>
    </div>
  );
};

export default BannerSection;
